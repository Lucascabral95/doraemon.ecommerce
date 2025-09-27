export interface ProductImage {
  imagen1: string;
  imagen2: string;
  imagen3: string;
}

export interface Product {
  id: number;
  texto: string;
  imagen: string;
  precio: number;
  descripcion: string;
  detalles: string;
  informacion: string;
  codigo: string;
  stock: number;

  categoria: string;
  subcategoria?: string;
  subcategoria2?: string;
  subcategoria4?: string;

  edades?: string;
  edades2?: string;
  edadesCio?: string;
  edadesoo?: string;
  adulto?: string;

  otrasImagenes: ProductImage[];
}

export interface CategoryDetails {
  Categoria: string;
  TextoDescripcion: string;
  Imagen: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CartProduct extends Product {
  cantidad: number;
  addedAt?: string;
}

export type SortOption =
  | "Normal"
  | "Alfabetico"
  | "PrecioMasBajo"
  | "PrecioMasAlto";

export type AgeCategory =
  | "DE 1 A 3 AÑOS"
  | "DE 3 A 5 AÑOS"
  | "DE 5 A 8 AÑOS"
  | "DE 8 A 11 AÑOS"
  | "ADULTOS";

export interface ProductFilters {
  categoria?: string;
  subcategoria?: string;
  subcategoria2?: string;
  subcategoria4?: string;

  edades?: AgeCategory;
  edades2?: AgeCategory;
  edadesCio?: AgeCategory;
  edadesoo?: AgeCategory;
  adulto?: AgeCategory;

  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
}

export interface PaginationState {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
}

export interface PaginationConfig {
  itemsPerPage?: number;
  maxVisiblePages?: number;
}

export interface ProductListState {
  isLoading: boolean;
  showFilters: boolean;
  sortOption: SortOption;
  error?: string;
}

export interface BreadcrumbItem {
  label: string;
  path?: string;
  isActive?: boolean;
}

export interface ProductSearchCriteria {
  text?: string;
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  ageGroups?: AgeCategory[];
}
