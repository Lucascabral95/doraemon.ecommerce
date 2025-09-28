export const CONDICIONES_DATA = {
  empresa: {
    nombre: "LUK INTERNACIONAL, SA",
    direccion: "TRAVESSERA DE GRÀCIA, 17 ENTL. C-D - 08021 BARCELONA",
    cif: "A58072281",
    telefono: "93 487 84 48",
    email: "atencioncliente@luk.es",
    emailInfo: "info@luk.es",
  },

  contacto: {
    telefono: "93 487 84 48",
    email: "atencioncliente@luk.es",
    emailLink: "mailto:atencioncliente@luk.es",
  },

  plazos: {
    reportar24h: "24 horas",
    reportar7dias: "siete días hábiles",
    devolver: "14 días naturales",
    reembolso: "14 días",
    modificacion: "15 (quince) días",
  },

  avisos: {
    navidad: {
      titulo: "AVISA NAVIDAD",
      mensaje:
        "Debido al alto volumen de envíos durante estas fechas, los plazos de recogida y entrega pueden variar. Te recomendamos adelantar tus pedidos online.",
    },
    festivo: {
      titulo: "FESTIVO 1 DE ENERO",
      mensaje:
        "Todos los pedidos realizados entre el viernes 29 de diciembre a las 12.00h hasta el lunes 1 de enero durante todo el día, serán preparados y enviados a partir del martes 2 de enero. Tenga en cuenta estos plazos a la hora de realizar su pedido.",
    },
  },

  envio: {
    hasta45:
      "Compras hasta 45 euros: El coste del envío es de 4.99 euros a península y Portugal y 5.25 a Baleares.",
    mas45: "Compras superiores a 45 euros: El coste del envío será gratuito.",
  },

  enlaces: {
    odr: "http://ec.europa.eu/consumers/odr/",
  },
} as const;
