import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  Auth,
} from "firebase/auth";
import { auth } from "../config/firebase.config"; // Import directo del auth inicializado
import { LoginFormData, FirebaseAuthUser } from "../types/auth.types";

export class FirebaseAuthService {
  private auth: Auth;

  constructor() {
    // ✅ Usar el auth ya inicializado
    this.auth = auth;

    // Verificar que esté inicializado
    if (!this.auth) {
      throw new Error(
        "Firebase Auth not initialized. Check firebase.config.ts"
      );
    }

    console.log("🔐 FirebaseAuthService initialized successfully");
  }

  /**
   * Inicia sesión con email y password
   */
  async signIn(credentials: LoginFormData): Promise<FirebaseAuthUser> {
    try {
      console.log("🔄 Attempting login...");

      const userCredential = await signInWithEmailAndPassword(
        this.auth,
        credentials.email,
        credentials.password
      );

      console.log("✅ Login successful");
      return this.mapUserToSafeFormat(userCredential.user);
    } catch (error: any) {
      // Log seguro sin exponer credenciales
      console.error("❌ Firebase auth error:", {
        code: error.code,
        timestamp: new Date().toISOString(),
        // ❌ NO logear: error.message (puede contener datos sensibles)
      });

      throw new Error(`Authentication failed: ${error.code}`);
    }
  }

  /**
   * Observa cambios en el estado de autenticación
   */
  onAuthStateChanged(
    callback: (user: FirebaseAuthUser | null) => void
  ): () => void {
    console.log("👂 Setting up auth state listener...");

    return onAuthStateChanged(this.auth, (user: User | null) => {
      const safeUser = user ? this.mapUserToSafeFormat(user) : null;
      console.log("🔄 Auth state changed:", {
        hasUser: !!user,
        userId: user?.uid || "none",
      });
      callback(safeUser);
    });
  }

  /**
   * Obtiene usuario actual
   */
  getCurrentUser(): FirebaseAuthUser | null {
    const user = this.auth.currentUser;
    return user ? this.mapUserToSafeFormat(user) : null;
  }

  /**
   * Verifica si el servicio está listo
   */
  isReady(): boolean {
    return !!this.auth;
  }

  /**
   * Mapea usuario de Firebase a formato seguro
   */
  private mapUserToSafeFormat(firebaseUser: User): FirebaseAuthUser {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
    };
  }
}

// ==================== SINGLETON INSTANCE ====================
let serviceInstance: FirebaseAuthService | null = null;

export const getFirebaseAuthService = (): FirebaseAuthService => {
  if (!serviceInstance) {
    serviceInstance = new FirebaseAuthService();
  }
  return serviceInstance;
};

// Export directo para compatibilidad
export const firebaseAuthService = getFirebaseAuthService();
