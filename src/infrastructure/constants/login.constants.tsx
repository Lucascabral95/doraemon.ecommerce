export const LOGIN_CONFIG = {
  ui: {
    title: "INICIAR SESIÓN CON TU CUENTA",
    labels: {
      email: "DIRECCIÓN DE CORREO ELECTRÓNICO",
      password: "CONTRASEÑA",
    },
    buttons: {
      login: "INICIAR SESIÓN",
      loginLoading: "INICIANDO SESIÓN...",
    },
    links: {
      forgotPassword: "¿Olvidaste tu contraseña?",
      createAccount: "¿No tienes una cuenta? Crea una aquí",
    },
  },

  validation: {
    email: {
      required: "El email es requerido",
      invalid: "Formato de email inválido",
    },
    password: {
      required: "La contraseña es requerida",
      minLength: "La contraseña debe tener al menos 6 caracteres",
    },
  },

  errors: {
    loginFailed: {
      title: "¡Fallido inicio de sesión!",
      message: "El email o la contraseña son incorrectos.",
      image: "/img/pikachu-confundido.gif",
    },
    network: {
      title: "Error de conexión",
      message: "Verifica tu conexión a internet",
    },
  },

  storage: {
    authStatus: "LogueoDeSesion",
    userEmail: "EmailDeInicioDeSesion",
  },

  routes: {
    register: "/register",
  },
} as const;

export const SWEET_ALERT_CONFIG = {
  error: {
    icon: "error" as const,
    timer: 4000,
    showConfirmButton: true,
    allowOutsideClick: true,
  },
} as const;
