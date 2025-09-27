export interface Category {
  id: string;
  name: string;
  route: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  route: string;
}

export interface CategoryState {
  [key: string]: boolean;
}

export interface HeaderState {
  activeSidebar: boolean;
  activeCategoria: CategoryState;
  activeSearch: boolean;
  articuloBuscado: string;
}

export interface CartItem {
  id: string;
  cantidad: number;
  [key: string]: any;
}

export interface NavigationStore {
  cart: CartItem[];
  cantidadArticulossss: number;
  setCantidadArticulossss: (cantidad: number) => void;
}
