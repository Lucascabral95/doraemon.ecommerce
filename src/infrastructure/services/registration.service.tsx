import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../config/firebase.config";
import {
  RegisterFormData,
  UserProfile,
  RegistrationResult,
  RegistrationAnalytics,
} from "../types/register.types";

export class RegistrationService {
  static async registerUser(
    formData: RegisterFormData,
    startTime: number
  ): Promise<RegistrationResult> {
    try {
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      const firebaseUser = userCredential.user;

      await updateProfile(firebaseUser, {
        displayName: `${formData.nombre} ${formData.apellido}`,
      });

      const userProfile: UserProfile = {
        uid: firebaseUser.uid,
        email: formData.email,
        nombre: formData.nombre,
        apellido: formData.apellido,
        fechaNacimiento: formData.fechaNacimiento,
        preferences: {
          marketingConsent: formData.marketingConsent,
          notifications: true,
        },
        metadata: {
          createdAt: new Date().toISOString(),
          emailVerified: firebaseUser.emailVerified,
        },
      };

      await setDoc(doc(db, "users", firebaseUser.uid), userProfile);

      const analytics: RegistrationAnalytics = {
        timestamp: Date.now(),
        success: true,
        timeToComplete: Date.now() - startTime,
      };
      this.trackRegistration(analytics);

      return {
        success: true,
        user: userProfile,
      };
    } catch (error: any) {
      console.error("Registration error:", error);

      const analytics: RegistrationAnalytics = {
        timestamp: Date.now(),
        success: false,
        errorCode: error.code,
        timeToComplete: Date.now() - startTime,
      };
      this.trackRegistration(analytics);

      let errorMessage = "Error al crear la cuenta";

      switch (error.code) {
        case "auth/email-already-in-use":
          errorMessage = "Este correo electrónico ya está registrado";
          break;
        case "auth/invalid-email":
          errorMessage = "El correo electrónico es inválido";
          break;
        case "auth/weak-password":
          errorMessage = "La contraseña es muy débil";
          break;
        case "auth/network-request-failed":
          errorMessage = "Error de conexión. Verifica tu internet";
          break;
        case "auth/too-many-requests":
          errorMessage = "Demasiados intentos. Intenta más tarde";
          break;
      }

      return {
        success: false,
        error: errorMessage,
        errorCode: error.code,
      };
    }
  }

  static async checkEmailExists(email: string): Promise<boolean> {
    try {
      const auth = getAuth();
      return false;
    } catch (error) {
      return false;
    }
  }

  private static trackRegistration(analytics: RegistrationAnalytics): void {
    try {
      const registrationHistory = JSON.parse(
        localStorage.getItem("registration_analytics") || "[]"
      );
      registrationHistory.push(analytics);

      const limitedHistory = registrationHistory.slice(-50);
      localStorage.setItem(
        "registration_analytics",
        JSON.stringify(limitedHistory)
      );

      console.log("📊 Registration tracked:", analytics);
    } catch (error) {
      console.error("Error tracking registration:", error);
    }
  }

  static getRegistrationStats(): {
    totalAttempts: number;
    successRate: number;
    averageCompletionTime: number;
    commonErrors: Array<{ code: string; count: number }>;
  } {
    try {
      const history: RegistrationAnalytics[] = JSON.parse(
        localStorage.getItem("registration_analytics") || "[]"
      );

      const totalAttempts = history.length;
      const successfulRegistrations = history.filter((h) => h.success).length;
      const successRate =
        totalAttempts > 0 ? (successfulRegistrations / totalAttempts) * 100 : 0;

      const completionTimes = history
        .filter((h) => h.success && h.timeToComplete)
        .map((h) => h.timeToComplete!);
      const averageCompletionTime =
        completionTimes.length > 0
          ? completionTimes.reduce((a, b) => a + b, 0) / completionTimes.length
          : 0;

      const errorCounts = new Map<string, number>();
      history
        .filter((h) => !h.success && h.errorCode)
        .forEach((h) => {
          const count = errorCounts.get(h.errorCode!) || 0;
          errorCounts.set(h.errorCode!, count + 1);
        });

      const commonErrors = Array.from(errorCounts.entries())
        .map(([code, count]) => ({ code, count }))
        .sort((a, b) => b.count - a.count);

      return {
        totalAttempts,
        successRate,
        averageCompletionTime,
        commonErrors,
      };
    } catch (error) {
      console.error("Error getting registration stats:", error);
      return {
        totalAttempts: 0,
        successRate: 0,
        averageCompletionTime: 0,
        commonErrors: [],
      };
    }
  }
}
