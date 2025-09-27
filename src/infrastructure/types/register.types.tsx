export interface RegisterFormData {
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  confirmPassword: string;
  fechaNacimiento?: string;
  termsAccepted: boolean;
  conditionsAccepted: boolean;
  marketingConsent: boolean;
}

export interface RegisterFormErrors {
  nombre?: string;
  apellido?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  fechaNacimiento?: string;
  termsAccepted?: string;
  conditionsAccepted?: string;
  general?: string;
}

export interface RegisterFormState {
  data: RegisterFormData;
  errors: RegisterFormErrors;
  isSubmitting: boolean;
  isValid: boolean;
  touchedFields: Set<keyof RegisterFormData>;
}

export interface UserProfile {
  uid: string;
  email: string;
  nombre: string;
  apellido: string;
  fechaNacimiento?: string;
  preferences: {
    marketingConsent: boolean;
    notifications: boolean;
  };
  metadata: {
    createdAt: string;
    lastLogin?: string;
    emailVerified: boolean;
  };
}

export interface PasswordValidation {
  minLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumbers: boolean;
  hasSpecialChars: boolean;
  score: number; // 0-100
  strength: "weak" | "medium" | "strong" | "very-strong";
}

export interface RegistrationResult {
  success: boolean;
  user?: UserProfile;
  error?: string;
  errorCode?: string;
}

export interface RegistrationAnalytics {
  timestamp: number;
  success: boolean;
  errorCode?: string;
  formValidationErrors?: string[];
  timeToComplete?: number;
}
