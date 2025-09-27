export const REGISTER_CONFIG = {
  ui: {
    title: "CREAR UNA CUENTA",
    subtitle: "Rellena este formulario con tus datos.",
    loginPrompt: "¿Ya tienes una cuenta?",
    loginLink: "¡Inicia sesión!",
    submitButton: "REGISTRARTE",
    submitButtonLoading: "CREANDO CUENTA...",

    labels: {
      nombre: "NOMBRE",
      apellido: "APELLIDO",
      email: "DIRECCIÓN DE CORREO ELECTRÓNICO",
      password: "CONTRASEÑA",
      confirmPassword: "CONFIRMAR CONTRASEÑA",
      fechaNacimiento: "FECHA DE NACIMIENTO (OPCIONAL)",
      dateExample: "(Ejemplo: 31/05/1970)",
    },

    placeholders: {
      nombre: "Tu nombre",
      apellido: "Tu apellido",
      email: "tu@email.com",
      password: "Mínimo 6 caracteres",
      confirmPassword: "Confirma tu contraseña",
      fechaNacimiento: "DD/MM/AAAA",
    },
  },

  validation: {
    password: {
      minLength: 6,
      requirements: [
        "Al menos 6 caracteres",
        "Una letra mayúscula",
        "Una letra minúscula",
        "Un número",
        "Un carácter especial",
      ],
    },
  },

  terms: {
    privacy: {
      text: "HE LEÍDO Y ACEPTO LAS CONDICIONES CONTENIDAS EN LA POLÍTICA DE PRIVACIDAD SOBRE EL TRATAMIENTO DE MIS DATOS PARA GESTIONAR MI PEDIDO.",
      required: true,
    },
    conditions: {
      text: "HE LEÍDO Y ACEPTO LAS CONDICIONES GENERALES DE CONTRATACIÓN",
      required: true,
    },
    marketing: {
      text: "CONSIENTO RECIBIR INFORMACIÓN COMERCIAL SOBRE LOS PRODUCTOS Y NOVEDADES DE DORAEMON",
      required: false,
    },

    privacyNotice:
      "LUK INTERNACIONAL, SA como responsable del tratamiento tratará tus datos con la finalidad de gestionar y tramitar tu pedido. Puedes acceder, rectificar y suprimir tus datos, así como ejercer otros derechos consultando la información adicional y detallada sobre la protección de datos en nuestra Política de Privacidad",
  },

  routes: {
    login: "/login",
    privacyPolicy: "/politica-privacidad",
    terms: "/condiciones-generales",
  },

  alerts: {
    success: {
      title: "¡Bienvenido!",
      text: "¡Tu cuenta ha sido creada exitosamente! Revisa tu email para verificar tu cuenta.",
      icon: "success",
      image: "/img/doraemon-feliz.gif",
    },
    error: {
      icon: "error",
      image: "/img/pikachu-electro.gif",
    },
  },
} as const;

export const PASSWORD_STRENGTH_CONFIG = {
  weak: { color: "#ef4444", label: "Muy débil" },
  medium: { color: "#f97316", label: "Débil" },
  strong: { color: "#eab308", label: "Buena" },
  "very-strong": { color: "#22c55e", label: "Excelente" },
} as const;
