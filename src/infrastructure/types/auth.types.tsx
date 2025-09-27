export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormState extends LoginFormData {
  isSubmitting: boolean;
  errors: {
    email?: string;
    password?: string;
    general?: string;
  };
}

export interface FirebaseAuthUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
}

export interface ZustandAuthStore {
  acceso: boolean;
  setAcceso: (acceso: boolean) => void;
  setEmailDeInicioDeSesion: (email: string) => void;
}

export interface SafeStorageData {
  isLoggedIn: string;
  userEmail: {
    email: string;
  };
}
