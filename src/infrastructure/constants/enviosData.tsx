export const ENVIOS_CONFIG = {
  avisos: {
    navidad: {
      titulo: "AVISO NAVIDAD",
      mensaje:
        "Debido al alto volumen de envíos durante estas fechas, los plazos de recogida y entrega pueden variar. Te recomendamos adelantar tus pedidos online.",
    },
    festivo: {
      titulo: "FESTIVO 1 DE ENERO",
      mensaje:
        "Todos los pedidos realizados entre el viernes 29 de diciembre a las 12.00h hasta el lunes 1 de enero durante todo el día, serán preparados y enviados a partir del martes 2 de enero. Tenga en cuenta estos plazos a la hora de realizar su pedido.",
    },
    constitucion: {
      titulo: "PUENTE DE LA CONSTITUCIÓN",
      mensaje1:
        "Todos los pedidos realizados entre el martes 5 de diciembre a las 15h del medio día, hasta el miércoles 6 de diciembre durante todo el día, serán preparados y enviados a partir del 7 de diciembre. Tenga en cuenta estos plazos a la hora de realizar su pedido.",
      mensaje2:
        "Todos los pedidos realizados entre el miércoles 7 de diciembre a las 15h del medio día, hasta el domingo 10 de diciembre durante todo el día, serán preparados y enviados a partir del lunes 11 de diciembre. Tenga en cuenta estos plazos a la hora de realizar su pedido.",
    },
  },

  envios: {
    titulo: "ENVÍOS",
    tiempoEntrega:
      "El tiempo de entrega estimado es de 24-48h laborables desde que el pedido sale de nuestras instalaciones en Barcelona. No obstante, debe tenerse en cuenta que el pedido saldrá el mismo día de su compra siempre y cuando esta se realice antes de las 15:00 (lunes-jueves) y antes de las 12:00 (viernes). Si se realiza más tarde, su pedido saldrá al siguiente día laboral en ambos casos.",

    ubicacionAlmacen:
      "Debido a que el almacén se encuentra en Barcelona, tengan en cuenta los festivos en Cataluña, fiestas locales de Barcelona, así como los festivos nacionales.",

    direcciones:
      "Será imprescindible que el usuario indique una dirección de entrega que esté garantizada dentro del territorio Español (excepto Melilla, Ceuta e Islas Canarias) o en Portugal (excepto Madeira y Azores). También será imprescindible que informe y/o confirme su número de teléfono en el momento de realizar el pedido y efectuar la compra.",

    entrega:
      "Los productos comprados en la Página Web serán enviados a la dirección de entrega indicada por el usuario en el momento de la compra.",

    aprobacionPago:
      "Hay que tener en cuenta que los plazos de aprobación del pago varían en función de la forma de pago y en base a ello la expedición puede sufrir demoras.",

    diasLaborables:
      "Se define como días laborables de Lunes a Viernes no festivo (incluye festivos locales). La empresa encargada del transporte de su pedido es Logística 24, S.A. (SEUR) y el servicio de entrega será siempre SEUR 24 HORAS.",

    costoTransporte:
      "El coste de transporte se puede consultar en todo momento visualizando la 'Cesta de la compra' y se calcula automáticamente en el momento de confirmar su pedido, en base a las siguientes variables:",

    tarifas: {
      hasta50:
        "Compras hasta 50 euros: El coste del envío es de 4.99 euros a península y Portugal y 5,25 a Baleares.",
      mas50: "Compras superiores a 50 euros: El coste del envío será gratuito.",
    },

    responsabilidades: {
      titulo: "En ningún caso LUK será responsable de:",
      punto1:
        "El plazo de aprobación de su pago que viene dado por Servired (para más información consulten la cláusula SEPTIMA: Facturación y pago).",
      punto2:
        "La empresa de mensajería (SEUR), si los conductores no dejan constancia en los sucesivos intentos de entrega del pedido tras las primeras 72 hs. (días hábiles) que se establecen para el primer intento de entrega.",
      disclaimer:
        "Asimismo, LUK no es responsable de los fallos en la entrega que pudieran deberse a culpa o negligencia de la empresa de mensajería encargada de gestionar la misma o de los fallos que pudieran presentar las redes de telecomunicaciones respecto de la modalidad de descarga. Estas incidencias serán asumidas y gestionadas por la empresa de transporte y/o telecomunicaciones dentro de su normal funcionamiento.",
    },
  },
} as const;
