import { useCallback, useState } from "react";
import Swal from "sweetalert2";

export function useNewsletter() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  const handleSuscribirse = useCallback(async () => {
    if (isSubmitting) return;

    const emailInput = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement | null;

    const checkboxInput = document.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement | null;

    const email = emailInput?.value.trim() || "";
    const acceptTerms = checkboxInput?.checked || false;

    if (!email) {
      await Swal.fire({
        title: "¡Error!",
        text: "Por favor ingresa tu correo electrónico",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#009FE3",
      });
      return;
    }

    if (!validateEmail(email)) {
      await Swal.fire({
        title: "¡Email inválido!",
        text: "Por favor ingresa un correo electrónico válido",
        icon: "warning",
        confirmButtonText: "Ok",
        confirmButtonColor: "#009FE3",
      });
      return;
    }

    if (!acceptTerms) {
      await Swal.fire({
        title: "¡Checkbox obligatorio! ☑️",
        html: `
          <div style="text-align: left; line-height: 1.6;">
            <p style="margin-bottom: 15px;">Para continuar con la suscripción debes:</p>
            <ul style="list-style: none; padding-left: 0;">
              <li style="margin-bottom: 10px;">
                <span style="color: #dc3545; font-weight: bold;">✓</span> 
                Marcar la casilla de aceptación
              </li>
              <li style="margin-bottom: 10px;">
                <span style="color: #dc3545; font-weight: bold;">✓</span> 
                Leer y aceptar las condiciones
              </li>
            </ul>
            <p style="color: #666; font-size: 14px; margin-top: 15px;">
              Esto es requerido por ley para el tratamiento de datos personales.
            </p>
          </div>
        `,
        icon: "warning",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#009FE3",
        background: "#fff8e1",
        customClass: { popup: "checkbox-warning-popup" },
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      await Swal.fire({
        title: "¡Bienvenido a la tienda de Doraemon! 🤖",
        text: `¡Te has suscrito exitosamente con el email: ${email}`,
        icon: "success",
        confirmButtonText: "¡Genial!",
        confirmButtonColor: "#009FE3",
        background: "#f8f9ff",
        timer: 4000,
        timerProgressBar: true,
      });

      if (emailInput) emailInput.value = "";
      if (checkboxInput) checkboxInput.checked = false;
    } catch (error) {
      console.error("Error al suscribirse:", error);
      await Swal.fire({
        title: "¡Oops! Algo salió mal",
        text: "Hubo un problema al procesar tu suscripción. Por favor intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Reintentar",
        confirmButtonColor: "#009FE3",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  return { isSubmitting, handleSuscribirse };
}
