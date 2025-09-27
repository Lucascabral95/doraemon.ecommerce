import { Product } from "./product.types";

export interface ProductDetailState {
  product: Product | null;
  relatedProducts: Product[];
  isLoading: boolean;
  error: string | null;
  notFound: boolean;
}

export interface ImageGalleryState {
  activeImageIndex: number;
  isZoomed: boolean;
  availableImages: string[];
}

export interface QuantitySelectorState {
  quantity: number;
  isUpdating: boolean;
  error?: string;
}

export interface ProductBreadcrumb {
  home: string;
  category: string;
  subcategory?: string;
  product: string;
}

export interface WishlistAction {
  productId: number;
  action: "add" | "remove";
  timestamp: string;
}

export interface RelatedProductsConfig {
  maxItems: number;
  strategy: "subcategory" | "category" | "mixed";
  excludeCurrentProduct: boolean;
}

export interface ImageZoomConfig {
  showThumbnails: boolean;
  enableKeyboardNavigation: boolean;
  closeOnOutsideClick: boolean;
}

export interface ImageZoomState {
  isOpen: boolean;
  currentImageIndex: number;
  images: string[];
}

export interface ProductWithDetails extends Product {
  breadcrumb?: ProductBreadcrumb;
  allImages?: string[];
  isInWishlist?: boolean;
  isInCart?: boolean;
  cartQuantity?: number;
}
