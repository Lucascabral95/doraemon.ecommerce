import { TrustFeature } from "../Interfaces";

const TRUST_FEATURES: readonly TrustFeature[] = [
  {
    icon: "https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza1.png",
    alt: "Tienda Oficial de Doraemon",
    text: "TIENDA OFICIAL DE DORAEMON",
  },
  {
    icon: "https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza3.png",
    alt: "Entregas en 24H",
    text: "ENTREGAS A PENÍNSULA EN 24-38H",
  },
  {
    icon: "https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza2.png",
    alt: "Pago seguro",
    text: "PAGO SEGURO",
  },
  {
    icon: "https://doraemon.lukinternacional.com/modules/blockreassurance/views/img/img_perso/confianza4.png",
    alt: "Envio gratuito",
    text: "ENVÍO GRATUITO A PARTIR DE 50€",
  },
] as const;

export default TRUST_FEATURES;
