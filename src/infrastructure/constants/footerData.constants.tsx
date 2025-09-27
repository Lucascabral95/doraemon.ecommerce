import { FooterSection, ContactInfo } from "../types/footer.types";

export const EXTERNAL_STORES = {
  shinChan: {
    url: "https://shinchan.lukinternacional.com/es/",
    text: "Tienda oficial Shin Chan",
  },
  lukInternacional: {
    url: "https://lukinternacional.com/",
    text: "Lukinternacional.com",
  },
} as const;

export const CONTACT_INFO: ContactInfo = {
  schedules: ["L-J 9:00H - 14:30H - 18:30H", "V 9:00H - 15:00H"],
  phones: [
    {
      number: "+34 93 487 84 48",
      icon: "phone",
    },
    {
      number: "+34 660 790 682",
      icon: "whatsapp",
    },
  ],
  email: {
    address: "ATENCIONCLIENTE@LIK.ES",
    icon: "email",
  },
  additionalInfo: ["LOTES EXCLUSIVOS", "FORMULARIO DE CONTACTO"],
};

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "PRODUCTOS",
    type: "links",
    items: [
      { to: "categoria/Juguete", text: "Juguetes" },
      { to: "categoria/Pelicula", text: "Películas" },
      { to: "categoria/Escolar", text: "Escolar y papelería" },
      { to: "categoria/Moda", text: "Moda" },
      { to: "categoria/Hogar", text: "Hogar" },
      { to: "categoria/LotesExclusivos", text: "Lotes exclusivos" },
      { to: "categoria/Regalo", text: "Regalos" },
    ],
  },
  {
    title: "SOBRE LA TIENDA",
    type: "links",
    items: [
      { to: "footer/envios", text: "Envíos" },
      { to: "footer/cambios-devoluciones", text: "Cambios y devoluciones" },
      { to: "footer/preguntas-frecuentes", text: "Preguntas frecuentes" },
      { to: "footer/quienes-somos", text: "Quiénes somos" },
    ],
  },
  {
    title: "ENCUÉNTRANOS TAMBIÉN",
    type: "external",
  },
  {
    title: "TÉRMINOS LEGALES",
    type: "links",
    items: [
      { to: "footer/condiciones-de-uso", text: "Condiciones de uso" },
      { to: "footer/politica-de-privacidad", text: "Política de privacidad" },
      { to: "footer/politica-de-cookies", text: "Política de cookies" },
      { to: "footer/nota-legal", text: "Nota legal" },
    ],
  },
  {
    title: "ATENCIÓN AL CLIENTE",
    type: "contact",
    contactInfo: CONTACT_INFO,
  },
];
