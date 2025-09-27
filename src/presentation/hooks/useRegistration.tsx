import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {
  RegisterFormData,
  RegistrationResult,
} from "../../infrastructure/types/register.types";
import { RegistrationService } from "../../infrastructure/services/registration.service";
import { REGISTER_CONFIG } from "../../infrastructure/constants/register.constants";

export const useRegistration = () => {
  const navigate = useNavigate();
  const [registrationStartTime, setRegistrationStartTime] = useState<number>(0);

  const handleRegistration = useCallback(
    async (formData: RegisterFormData): Promise<RegistrationResult> => {
      const startTime = Date.now();
      setRegistrationStartTime(startTime);

      try {
        console.log("🚀 Starting registration process...");

        const result = await RegistrationService.registerUser(
          formData,
          startTime
        );

        if (result.success && result.user) {
          console.log("✅ Registration successful:", result.user.email);

          await Swal.fire({
            ...REGISTER_CONFIG.alerts.success,
            confirmButtonText: "Continuar",
          });

          navigate(REGISTER_CONFIG.routes.login, {
            replace: true,
            state: {
              registrationSuccess: true,
              email: result.user.email,
            },
          });

          return result;
        } else {
          await Swal.fire({
            ...REGISTER_CONFIG.alerts.error,
            title: "¡Error en el registro!",
            text: result.error || "Error desconocido al crear la cuenta",
            confirmButtonText: "Intentar de nuevo",
          });

          return result;
        }
      } catch (error: any) {
        console.error("❌ Registration failed:", error);

        await Swal.fire({
          ...REGISTER_CONFIG.alerts.error,
          title: "¡Error inesperado!",
          text: "Ocurrió un error inesperado. Inténtalo de nuevo.",
          confirmButtonText: "Reintentar",
        });

        return {
          success: false,
          error: "Error inesperado",
          errorCode: "unexpected_error",
        };
      }
    },
    [navigate]
  );

  return {
    handleRegistration,
    registrationStartTime,
  };
};
