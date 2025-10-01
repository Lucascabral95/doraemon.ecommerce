export interface RegisterFormData {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirmPassword: string;
  fechaNacimiento: string;
  termsAccepted: boolean;
  conditionsAccepted: boolean;
  marketingConsent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export interface PasswordStrengthResult {
  strength: string;
  color: string;
  score: number;
}
