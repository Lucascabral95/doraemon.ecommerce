export const ITEMS_PER_PAGE = 16;
export const SKELETON_LOADING_DURATION = 600;

export const SORT_OPTIONS = {
  Normal: "Los más vendidos",
  Alfabetico: "Nombre A a Z",
  PrecioMasBajo: "Precio: de más bajo a más alto",
  PrecioMasAlto: "Precio: de más alto a más bajo",
  Relevancia: "Relevancia",
} as const;

export const CATEGORY_DASHBOARD = [
  {
    id: "juguetes",
    title: "JUGUETES",
    route: "/categoria/Juguete",
    subcategories: [
      { id: "peluche", name: "Peluches", route: "/categoria/Peluche" },
      { id: "juego", name: "Juegos", route: "/categoria/Juego" },
      { id: "figura", name: "Figuras", route: "/categoria/Figura" },
      { id: "aireLibre", name: "Aire libre", route: "/categoria/AireLibre" },
    ],
  },
  {
    id: "peliculas",
    title: "PELÍCULAS",
    route: "/categoria/Pelicula",
    subcategories: [
      { id: "dvd", name: "DVD", route: "/categoria/DVD" },
      { id: "bluray", name: "Blu Ray", route: "/categoria/BLURAY" },
      { id: "pack", name: "Packs", route: "/categoria/PACK" },
    ],
  },
  {
    id: "escolar",
    title: "ESCOLAR Y PAPELERÍA",
    route: "/categoria/Escolar",
    subcategories: [
      {
        id: "materialEscolar",
        name: "Material escolar",
        route: "/categoria/MaterialEscolar",
      },
      { id: "mochila", name: "Mochilas y bolsas", route: "/categoria/Mochila" },
      { id: "libro", name: "Libros de actividades", route: "/categoria/Libro" },
    ],
  },
  {
    id: "moda",
    title: "MODA",
    route: "/categoria/Moda",
    subcategories: [
      { id: "ropa", name: "Ropa", route: "/categoria/Ropa" },
      {
        id: "accesorios",
        name: "Accesorios y complementos",
        route: "/categoria/Accesorios",
      },
      { id: "disfraz", name: "Disfraces", route: "/categoria/Disfraz" },
    ],
  },
  {
    id: "hogar",
    title: "HOGAR",
    route: "/categoria/Hogar",
    subcategories: [
      {
        id: "ropaCama",
        name: "Ropa de cama",
        route: "/categoria/ROPA DE CAMA",
      },
      { id: "taza", name: "Tazas y vajilla", route: "/categoria/Taza" },
      { id: "baño", name: "Baño", route: "/categoria/Baño" },
      { id: "otros", name: "Otros", route: "/categoria/Otros" },
    ],
  },
  {
    id: "lotesExclusivos",
    title: "LOTES EXCLUSIVOS",
    route: "/categoria/LotesExclusivos",
  },
  {
    id: "regalos",
    title: "REGALOS",
    route: "/categoria/Regalo",
    subcategories: [
      {
        id: "edad1-3",
        name: "De 1 a 3 años",
        route: "/categoria/DE 1 A 3 AÑOS",
      },
      {
        id: "edad3-5",
        name: "De 3 a 5 años",
        route: "/categoria/DE 3 A 5 AÑOS",
      },
      {
        id: "edad5-8",
        name: "De 5 a 8 años",
        route: "/categoria/DE 5 A 8 AÑOS",
      },
      {
        id: "edad8-11",
        name: "De 8 a 11 años",
        route: "/categoria/DE 8 A 11 AÑOS",
      },
      { id: "adultos", name: "Adultos", route: "/categoria/ADULTOS" },
    ],
  },
] as const;

export const PRODUCT_LIST_CONFIG = {
  loadingDuration: SKELETON_LOADING_DURATION,
  itemsPerPage: ITEMS_PER_PAGE,
  ui: {
    labels: {
      inicio: "Inicio",
      ordenarPor: "Ordenar por:",
      revelancia: "Revelancia",
    },
    icons: {
      cart: "M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2zM18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2zM20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z",
      dropdown: "M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z",
      prevPage: "M5.854.036l.7.7-5.1 5.1 5.1 5.1-.7.8-5.9-5.9z",
      nextPage: "M.754 11.736l-.8-.8 5.2-5.1-5.2-5.1.8-.7 5.8 5.8z",
    },
  },
} as const;
