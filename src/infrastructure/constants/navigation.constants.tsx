import { Category } from "../types/navigation.types";

export const APP_CONFIG = {
  logoUrl:
    "https://doraemon.lukinternacional.com/img/doraemon-logo-1612528256.jpg",
  logoAlt: "Logo de Doraemon",
  searchPlaceholder: "Buscar producto",
  languages: ["ES", "PT"],
} as const;

export const MAIN_CATEGORIES: Category[] = [
  {
    id: "juguetes",
    name: "JUGUETES",
    route: "/categoria/Juguete",
    subcategories: [
      { id: "peluche", name: "PELUCHES", route: "/categoria/Peluche" },
      { id: "juego", name: "JUEGOS", route: "/categoria/Juego" },
      { id: "figura", name: "FIGURAS", route: "/categoria/Figura" },
      { id: "aireLibre", name: "AIRE LIBRE", route: "/categoria/AireLibre" },
    ],
  },
  {
    id: "peliculas",
    name: "PELÍCULAS",
    route: "/categoria/Pelicula",
    subcategories: [
      { id: "dvd", name: "DVD", route: "/categoria/DVD" },
      { id: "bluray", name: "BLU RAY", route: "/categoria/BLURAY" },
      { id: "pack", name: "PACKS", route: "/categoria/PACK" },
    ],
  },
  {
    id: "escolar",
    name: "ESCOLAR Y PAPELERÍA",
    route: "/categoria/Escolar",
    subcategories: [
      {
        id: "materialEscolar",
        name: "MATERIAL ESCOLAR",
        route: "/categoria/MaterialEscolar",
      },
      { id: "mochila", name: "MOCHILAS Y BOLSAS", route: "/categoria/Mochila" },
      { id: "libro", name: "LIBROS DE ACTIVIDADES", route: "/categoria/Libro" },
    ],
  },
  {
    id: "moda",
    name: "MODA",
    route: "/categoria/Moda",
    subcategories: [
      { id: "ropa", name: "ROPA", route: "/categoria/Ropa" },
      {
        id: "accesorios",
        name: "ACCESORIOS Y COMPLEMENTOS",
        route: "/categoria/Accesorios",
      },
      { id: "disfraz", name: "DISFRACES", route: "/categoria/Disfraz" },
    ],
  },
  {
    id: "hogar",
    name: "HOGAR",
    route: "/categoria/Hogar",
    subcategories: [
      { id: "ropaCama", name: "ROPA DE CAMA", route: "/categoria/RopaCama" },
      { id: "taza", name: "TAZAS Y VAJILLA", route: "/categoria/Taza" },
      { id: "baño", name: "BAÑO", route: "/categoria/Baño" },
      { id: "otros", name: "OTROS", route: "/categoria/Otros" },
    ],
  },
  {
    id: "lotesExclusivos",
    name: "LOTES EXCLUSIVOS",
    route: "/categoria/LotesExclusivos",
  },
  {
    id: "regalos",
    name: "REGALOS",
    route: "/categoria/Regalo",
    subcategories: [
      {
        id: "edad1-3",
        name: "DE 1 A 3 AÑOS",
        route: "/categoria/DE 1 A 3 AÑOS",
      },
      {
        id: "edad3-5",
        name: "DE 3 A 5 AÑOS",
        route: "/categoria/DE 3 A 5 AÑOS",
      },
      {
        id: "edad5-8",
        name: "DE 5 A 8 AÑOS",
        route: "/categoria/DE 5 A 8 AÑOS",
      },
      {
        id: "edad8-11",
        name: "DE 8 A 11 AÑOS",
        route: "/categoria/DE 8 A 11 AÑOS",
      },
      { id: "adultos", name: "ADULTOS", route: "/categoria/ADULTOS" },
    ],
  },
];

export const INITIAL_CATEGORY_STATE = MAIN_CATEGORIES.reduce(
  (acc, category) => ({
    ...acc,
    [category.id]: false,
  }),
  {} as Record<string, boolean>
);
