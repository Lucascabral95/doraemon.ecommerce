import { TrustedShopsConfig } from "../types/trustedShops.types";

export const TRUSTED_SHOPS_CONFIG: TrustedShopsConfig = {
  certificateId: "X32950191277C5854F2B7925D3E3FFEEB",
  rating: 5.0,
  ratingText: "Excelente",
  links: [
    {
      url: "https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html?utm_source=shop&utm_medium=link&utm_content=menu_check_certificate__full&utm_campaign=trustbadge_minimised",
      text: "Comprobar certificado",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.com/tsdocument/TS_QUALITY_CRITERIA_es.pdf",
      text: "Criterios de calidad",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.com/tsdocument/BUYER_AUTO_PROTECTION_TERMS_es.pdf",
      text: "Condiciones de la garantía",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html",
      text: "Todas las valoraciones",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.es/aviso-legal/?utm_content=menu_imprint__full&utm_campaign=trustbadge_minimised",
      text: "Aviso legal",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.es/aviso-legal/?utm_content=menu_imprint__full&utm_campaign=trustbadge_minimised",
      text: "Protección de datos",
      target: "_blank",
    },
    {
      url: "https://www.trustedshops.es/evaluacion/info_X32950191277C5854F2B7925D3E3FFEEB.html#legal",
      text: "Valoraciones auténticas",
      target: "_blank",
    },
  ],
};

export const TRUSTED_SHOPS_IMAGES = {
  trustmark:
    "https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#trustmark",
  starYellow:
    "https://widgets.trustedshops.com/assets/images/sprite.fa10bbbffbb158ef65643d1dccd20ba7bd355392.svg#star-yellow",
} as const;
