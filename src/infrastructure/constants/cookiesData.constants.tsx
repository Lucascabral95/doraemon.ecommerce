export const COOKIES_DATA = {
  cookies: [
    {
      nombre: "_gat",
      proveedor: "Google",
      proveedorLink: "https://policies.google.com/privacy",
      proposito:
        "Utilizado por Google Analytics para controlar la tasa de peticiones",
      caducidad: "1 día",
      tipo: "HTTP Cookie",
      esGoogle: true,
    },
    {
      nombre: "PHPSESSID",
      proveedor: "doraemon.lukinternacional.com",
      proposito:
        "Nativa de PHP, permite a almacenar datos de estado serializados.",
      caducidad: "Sesión",
      tipo: "HTTP Cookie",
      esGoogle: false,
    },
    {
      nombre: "_gid",
      proveedor: "Google",
      proveedorLink: "https://policies.google.com/privacy",
      proposito:
        "Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.",
      caducidad: "1 día",
      tipo: "HTTP Cookie",
      esGoogle: true,
    },
    {
      nombre: "_ga",
      proveedor: "Google",
      proveedorLink: "https://policies.google.com/privacy",
      proposito:
        "Registra una identificación única que se utiliza para generar datos estadísticos acerca de cómo utiliza el visitante el sitio web.",
      caducidad: "2 años",
      tipo: "HTTP Cookie",
      esGoogle: true,
    },
    {
      nombre: "PrestaShop-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      proveedor: "doraemon.lukinternacional.com",
      proposito: "Para la activación de funcionalidades básicas de la web.",
      caducidad: "20 días",
      tipo: "HTTP Cookie",
      esGoogle: false,
    },
  ],

  navegadores: [
    {
      nombre: "Chrome",
      link: "https://support.google.com/chrome/answer/95647?hl=es&sc_ref_bbva=https%3A%2F%2Fwww.bbva.es%2Fsistema%2Fmeta%2Faviso-legal%2Findex.jsp",
      pasos:
        "Configuración → Mostrar opciones avanzadas → Privacidad → Configuración del contenido",
      soporte:
        "https://support.google.com/chrome/answer/95647?hl=es&ref_topic=3434352",
      textoSoporte: "el soporte de Google",
    },
    {
      nombre: "Explorer",
      link: "https://support.microsoft.com/es-es/windows",
      pasos: "Herramientas → Opciones de Internet → Privacidad → Configuración",
      soporte:
        "https://support.microsoft.com/es-es/windows/ayuda-de-internet-explorer-23360e49-9cd3-4dda-ba52-705336cc0de2#ie=ie-11",
      textoSoporte: "el soporte de Microsoft",
    },
    {
      nombre: "Firefox",
      link: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias?sc_ref_bbva=https%3A%2F%2Fwww.bbva.es%2Fsistema%2Fmeta%2Faviso-legal%2Findex.jsp&redirectslug=habilitar-y-deshabilitar-cookies-que-los-sitios-we&redirectlocale=es",
      pasos:
        "Herramientas → Opciones → Privacidad → Historial → Configuración Personalizada",
      soporte: "https://support.mozilla.org/es/",
      textoSoporte: "el soporte de Mozilla",
    },
    {
      nombre: "Safari",
      link: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac",
      pasos: "Preferencias → Seguridad",
      soporte: "https://support.apple.com/es-es/105082",
      textoSoporte: "el soporte de Apple",
    },
  ],
} as const;
