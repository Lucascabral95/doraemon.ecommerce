import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  Auth,
} from "firebase/auth";
import { auth } from "../config/firebase.config";
import { LoginFormData, FirebaseAuthUser } from "../types/auth.types";

export class FirebaseAuthService {
  private auth: Auth;

  constructor() {
    this.auth = auth;

    if (!this.auth) {
      throw new Error(
        "Firebase Auth not initialized. Check firebase.config.ts"
      );
    }

    console.log("🔐 FirebaseAuthService initialized successfully");
  }

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
      console.error("❌ Firebase auth error:", {
        code: error.code,
        timestamp: new Date().toISOString(),
      });

      throw new Error(`Authentication failed: ${error.code}`);
    }
  }

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

  getCurrentUser(): FirebaseAuthUser | null {
    const user = this.auth.currentUser;
    return user ? this.mapUserToSafeFormat(user) : null;
  }

  isReady(): boolean {
    return !!this.auth;
  }

  private mapUserToSafeFormat(firebaseUser: User): FirebaseAuthUser {
    return {
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      displayName: firebaseUser.displayName,
    };
  }
}

let serviceInstance: FirebaseAuthService | null = null;

export const getFirebaseAuthService = (): FirebaseAuthService => {
  if (!serviceInstance) {
    serviceInstance = new FirebaseAuthService();
  }
  return serviceInstance;
};

export const firebaseAuthService = getFirebaseAuthService();
