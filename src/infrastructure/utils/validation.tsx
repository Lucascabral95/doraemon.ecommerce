import { PasswordStrengthResult, ValidationResult } from "../Interfaces";
import { RegisterFormData } from "../types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^(\d{2})\/(\d{2})\/(\d{4})$/;
const MIN_PASSWORD_LENGTH = 6;

export const validateForm = (formData: RegisterFormData): ValidationResult => {
  if (!formData.nombre.trim()) {
    return { isValid: false, message: "Nombre es requerido" };
  }

  if (!formData.apellido.trim()) {
    return { isValid: false, message: "Apellido es requerido" };
  }

  if (!formData.email.trim()) {
    return { isValid: false, message: "Email es requerido" };
  }

  if (!EMAIL_REGEX.test(formData.email)) {
    return { isValid: false, message: "Formato de email inválido" };
  }

  if (!formData.password) {
    return { isValid: false, message: "Contraseña es requerida" };
  }

  if (formData.password.length < MIN_PASSWORD_LENGTH) {
    return {
      isValid: false,
      message: `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres`,
    };
  }

  if (!formData.confirmPassword) {
    return { isValid: false, message: "Confirma tu contraseña" };
  }

  if (formData.password !== formData.confirmPassword) {
    return { isValid: false, message: "Las contraseñas no coinciden" };
  }

  if (formData.fechaNacimiento && !DATE_REGEX.test(formData.fechaNacimiento)) {
    return {
      isValid: false,
      message: "Formato de fecha debe ser DD/MM/YYYY",
    };
  }

  if (!formData.termsAccepted) {
    return {
      isValid: false,
      message: "Debes aceptar la política de privacidad",
    };
  }

  if (!formData.conditionsAccepted) {
    return {
      isValid: false,
      message: "Debes aceptar las condiciones generales",
    };
  }

  return { isValid: true };
};

export const getPasswordStrength = (
  password: string
): PasswordStrengthResult => {
  if (!password) return { strength: "", color: "", score: 0 };

  let score = 0;
  if (password.length >= 6) score += 25;
  if (password.length >= 8) score += 25;
  if (/[A-Z]/.test(password)) score += 25;
  if (/[0-9]/.test(password)) score += 25;

  if (score <= 25) return { strength: "Muy débil", color: "#ef4444", score };
  if (score <= 50) return { strength: "Débil", color: "#f97316", score };
  if (score <= 75) return { strength: "Buena", color: "#eab308", score };
  return { strength: "Excelente", color: "#22c55e", score };
};
