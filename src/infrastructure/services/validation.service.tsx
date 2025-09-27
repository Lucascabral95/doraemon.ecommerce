import {
  RegisterFormData,
  RegisterFormErrors,
  PasswordValidation,
} from "../types/register.types";

export class ValidationService {
  static validateEmail(email: string): { isValid: boolean; error?: string } {
    if (!email || email.trim() === "") {
      return { isValid: false, error: "El email es requerido" };
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (!emailRegex.test(email)) {
      return { isValid: false, error: "Formato de email inválido" };
    }

    if (email.length > 254) {
      return { isValid: false, error: "Email demasiado largo" };
    }

    return { isValid: true };
  }

  static validateName(
    name: string,
    fieldName: string
  ): { isValid: boolean; error?: string } {
    if (!name || name.trim() === "") {
      return { isValid: false, error: `${fieldName} es requerido` };
    }

    if (name.trim().length < 2) {
      return {
        isValid: false,
        error: `${fieldName} debe tener al menos 2 caracteres`,
      };
    }

    if (name.trim().length > 50) {
      return {
        isValid: false,
        error: `${fieldName} no puede exceder 50 caracteres`,
      };
    }

    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s'-]+$/;
    if (!nameRegex.test(name)) {
      return {
        isValid: false,
        error: `${fieldName} contiene caracteres no válidos`,
      };
    }

    return { isValid: true };
  }

  static validatePassword(password: string): PasswordValidation {
    const validation: PasswordValidation = {
      minLength: password.length >= 6,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumbers: /\d/.test(password),
      hasSpecialChars: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(password),
      score: 0,
      strength: "weak",
    };

    let score = 0;
    if (validation.minLength) score += 20;
    if (validation.hasUpperCase) score += 20;
    if (validation.hasLowerCase) score += 20;
    if (validation.hasNumbers) score += 20;
    if (validation.hasSpecialChars) score += 20;

    if (password.length >= 8) score += 10;
    if (password.length >= 12) score += 10;

    validation.score = Math.min(score, 100);

    if (validation.score >= 80) validation.strength = "very-strong";
    else if (validation.score >= 60) validation.strength = "strong";
    else if (validation.score >= 40) validation.strength = "medium";
    else validation.strength = "weak";

    return validation;
  }

  static validatePasswordConfirm(
    password: string,
    confirmPassword: string
  ): { isValid: boolean; error?: string } {
    if (!confirmPassword) {
      return { isValid: false, error: "Confirma tu contraseña" };
    }

    if (password !== confirmPassword) {
      return { isValid: false, error: "Las contraseñas no coinciden" };
    }

    return { isValid: true };
  }

  static validateBirthDate(dateString: string): {
    isValid: boolean;
    error?: string;
  } {
    if (!dateString || dateString.trim() === "") {
      return { isValid: true };
    }

    const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dateString.match(dateRegex);

    if (!match) {
      return { isValid: false, error: "Formato debe ser DD/MM/YYYY" };
    }

    const [, day, month, year] = match;
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

    if (
      date.getDate() !== parseInt(day) ||
      date.getMonth() !== parseInt(month) - 1 ||
      date.getFullYear() !== parseInt(year)
    ) {
      return { isValid: false, error: "Fecha inválida" };
    }

    if (date > new Date()) {
      return { isValid: false, error: "La fecha no puede ser futura" };
    }

    const today = new Date();
    const age = today.getFullYear() - date.getFullYear();
    if (age < 13) {
      return { isValid: false, error: "Debes tener al menos 13 años" };
    }
    if (age > 120) {
      return { isValid: false, error: "Fecha no válida" };
    }

    return { isValid: true };
  }

  static validateRegistrationForm(data: RegisterFormData): RegisterFormErrors {
    const errors: RegisterFormErrors = {};

    const nombreValidation = this.validateName(data.nombre, "Nombre");
    if (!nombreValidation.isValid) {
      errors.nombre = nombreValidation.error;
    }

    const apellidoValidation = this.validateName(data.apellido, "Apellido");
    if (!apellidoValidation.isValid) {
      errors.apellido = apellidoValidation.error;
    }

    const emailValidation = this.validateEmail(data.email);
    if (!emailValidation.isValid) {
      errors.email = emailValidation.error;
    }

    const passwordValidation = this.validatePassword(data.password);
    if (passwordValidation.score < 40) {
      errors.password = "La contraseña es muy débil";
    }

    const confirmValidation = this.validatePasswordConfirm(
      data.password,
      data.confirmPassword
    );
    if (!confirmValidation.isValid) {
      errors.confirmPassword = confirmValidation.error;
    }

    const dateValidation = this.validateBirthDate(data.fechaNacimiento || "");
    if (!dateValidation.isValid) {
      errors.fechaNacimiento = dateValidation.error;
    }

    if (data.termsAccepted === false) {
      errors.termsAccepted = "Debes aceptar la política de privacidad";
    }

    if (data.conditionsAccepted === false) {
      errors.conditionsAccepted = "Debes aceptar las condiciones generales";
    }

    return errors;
  }
}
