import {
  getAuth,
  createUserWithEmailAndPassword,
  AuthError,
} from "firebase/auth";

export interface AuthResult {
  success: boolean;
  email?: string;
  error?: string;
}

const getErrorMessage = (errorCode: string): string => {
  const errorMessages: Record<string, string> = {
    "auth/email-already-in-use": "Este correo electrónico ya está registrado",
    "auth/invalid-email": "El correo electrónico es inválido",
    "auth/weak-password": "La contraseña es muy débil",
    "auth/network-request-failed": "Error de conexión. Verifica tu internet",
  };

  return (
    errorMessages[errorCode] || "Error al crear la cuenta. Inténtalo de nuevo"
  );
};

export const registerUser = async (
  email: string,
  password: string
): Promise<AuthResult> => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    return {
      success: true,
      email: userCredential.user.email || email,
    };
  } catch (error) {
    console.error("❌ Error creating user:", error);
    const authError = error as AuthError;

    return {
      success: false,
      error: getErrorMessage(authError.code),
    };
  }
};
