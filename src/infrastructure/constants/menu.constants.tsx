import { ResponsiveImage, WelcomeContent } from "../Interfaces";

export const WELCOME_CONTENT: WelcomeContent = {
  text: "TIENDA OFICIAL DE DORAEMON",
  title: "Productos oficiales de Doraemon",
};

export const RESPONSIVE_IMAGES: ResponsiveImage[] = [
  {
    src: "/img/menu-principal-2.jpg",
    alt: "Bienvenida",
    className: "img",
  },
  {
    src: "/img/menu-secundario-2.jpg",
    alt: "Bienvenida",
    className: "img-intermedia",
    style: { display: "none" },
  },
  {
    src: "/img/menu-terciario-2.jpg",
    alt: "Bienvenida",
    className: "img-pequeña",
    style: { display: "none" },
  },
];
