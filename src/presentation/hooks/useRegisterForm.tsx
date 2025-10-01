import { useState, useCallback, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { RegisterFormData } from "../../infrastructure/types";
import { validateForm } from "../../infrastructure/utils/validation";
import { registerUser } from "../../infrastructure/services/authService";

const INITIAL_FORM_STATE: RegisterFormData = {
  nombre: "",
  apellido: "",
  email: "",
  password: "",
  confirmPassword: "",
  fechaNacimiento: "",
  termsAccepted: false,
  conditionsAccepted: false,
  marketingConsent: false,
};

export const useRegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] =
    useState<RegisterFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPasswordReqs, setShowPasswordReqs] = useState(false);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    const validation = validateForm(formData);
    if (!validation.isValid) {
      await Swal.fire({
        title: "¡Error!",
        text: validation.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    setIsSubmitting(true);

    const result = await registerUser(formData.email, formData.password);

    if (result.success) {
      await Swal.fire({
        title: "¡Bienvenido!",
        text: "¡Tu cuenta ha sido creada exitosamente!",
        icon: "success",
        confirmButtonText: "Continuar",
        imageUrl: "/img/doraemon-feliz.gif",
      });

      navigate("/login", {
        replace: true,
        state: { registrationSuccess: true, email: result.email },
      });
    } else {
      await Swal.fire({
        title: "¡Error!",
        text: result.error,
        icon: "error",
        confirmButtonText: "Ok",
        imageUrl: "/img/pikachu-electro.gif",
      });
    }

    setIsSubmitting(false);
  };

  return {
    formData,
    isSubmitting,
    showPasswordReqs,
    handleInputChange,
    handleSubmit,
    setShowPasswordReqs,
  };
};
