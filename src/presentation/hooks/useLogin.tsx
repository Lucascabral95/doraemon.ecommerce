import { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import { getFirebaseAuthService } from "../../infrastructure/services/firebaseAuth.service";
import { LoginStorageManager } from "../../infrastructure/utils/loginStorage.utils";
import {
  LOGIN_CONFIG,
  SWEET_ALERT_CONFIG,
} from "../../infrastructure/constants/login.constants";
import {
  LoginFormState,
  ZustandAuthStore,
  FirebaseAuthUser,
} from "../../infrastructure/types/auth.types";

interface UseLoginProps {
  zustandStore: ZustandAuthStore;
}

export const useLogin = ({ zustandStore }: UseLoginProps) => {
  const { acceso, setAcceso, setEmailDeInicioDeSesion } = zustandStore;

  // Estado del formulario
  const [formState, setFormState] = useState<LoginFormState>({
    email: "",
    password: "",
    isSubmitting: false,
    errors: {},
  });

  const [isServiceReady, setIsServiceReady] = useState<boolean>(false);

  // Inicializar servicio Firebase
  useEffect(() => {
    try {
      const authService = getFirebaseAuthService();

      if (authService.isReady()) {
        setIsServiceReady(true);

        const unsubscribe = authService.onAuthStateChanged(
          (user: FirebaseAuthUser | null) => {
            const isAuthenticated = !!user;
            setAcceso(isAuthenticated);
          }
        );

        return unsubscribe;
      } else {
        console.error("❌ Firebase Auth Service not ready");
        setIsServiceReady(false);
      }
    } catch (error) {
      console.error("❌ Error initializing Firebase Auth Service:", error);
      setIsServiceReady(false);
    }
  }, [setAcceso]);

  // Actualizar campo del formulario
  const updateField = useCallback(
    (field: keyof LoginFormState, value: string) => {
      setFormState((prev) => ({
        ...prev,
        [field]: value,
        errors: { ...prev.errors, [field]: undefined },
      }));
    },
    []
  );

  // Validar formulario
  const validateForm = useCallback((): boolean => {
    const errors: LoginFormState["errors"] = {};

    if (!formState.email) {
      errors.email = LOGIN_CONFIG.validation.email.required;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = LOGIN_CONFIG.validation.email.invalid;
    }

    if (!formState.password) {
      errors.password = LOGIN_CONFIG.validation.password.required;
    } else if (formState.password.length < 6) {
      errors.password = LOGIN_CONFIG.validation.password.minLength;
    }

    setFormState((prev) => ({ ...prev, errors }));
    return Object.keys(errors).length === 0;
  }, [formState.email, formState.password]);

  // Mostrar error con SweetAlert
  const showErrorAlert = useCallback((title?: string, text?: string) => {
    Swal.fire({
      ...SWEET_ALERT_CONFIG.error,
      title: title || LOGIN_CONFIG.errors.loginFailed.title,
      text: text || LOGIN_CONFIG.errors.loginFailed.message,
      imageUrl: LOGIN_CONFIG.errors.loginFailed.image,
    });
  }, []);

  // Función de inicio de sesión
  const handleLogin = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();

      if (formState.isSubmitting || !isServiceReady) return;

      if (!validateForm()) {
        return;
      }

      setFormState((prev) => ({ ...prev, isSubmitting: true }));

      try {
        const authService = getFirebaseAuthService();

        const user = await authService.signIn({
          email: formState.email,
          password: formState.password,
        });

        LoginStorageManager.saveAuthData(user.email!);
        setEmailDeInicioDeSesion(user.email!);

        setFormState({
          email: "",
          password: "",
          isSubmitting: false,
          errors: {},
        });
      } catch (error: any) {
        showErrorAlert();
        setFormState((prev) => ({ ...prev, isSubmitting: false }));
      }
    },
    [
      formState,
      isServiceReady,
      validateForm,
      showErrorAlert,
      setEmailDeInicioDeSesion,
    ]
  );

  // Handlers para inputs
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateField("email", e.target.value);
    },
    [updateField]
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      updateField("password", e.target.value);
    },
    [updateField]
  );

  return {
    // Estado
    formState,
    isAuthenticated: acceso,
    isServiceReady,

    // Handlers
    handleEmailChange,
    handlePasswordChange,
    handleLogin,

    // Utils
    hasFormErrors: Object.keys(formState.errors).length > 0,
  };
};
