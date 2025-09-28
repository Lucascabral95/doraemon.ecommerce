export const DERECHOS_DATA = {
  fujikoPro: {
    copyright: "© 1970-2023 Fujiko Pro",
    tiendaOficial: "Tienda online oficial de Doraemon en España y Portugal",
    logoUrl:
      "https://doraemon.lukinternacional.com/themes/doraemon_theme/assets//images/logo-luk.png",
    logoAlt: "Fujiko Pro",
  },

  lukInternacional: {
    empresa: "LUK INTERNACIONAL, S.A.",
    copyright: "© 2023 LUK INTERNACIONAL. Todos los derechos reservados.",
    advertencia:
      "Ningún contenido de este sitio web puede ser utilizado sin un permiso escrito por parte de LUK INTERNACIONAL, S.A.",
    disenoCredito: "ecommerce design by La Teva Web",
    disenoLink: "La Teva Web",
  },

  getCurrentYear: () => new Date().getFullYear(),
} as const;
