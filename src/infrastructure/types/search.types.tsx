import { Product } from "./product.types";

export interface SearchQuery {
  term: string;
  filters?: SearchFilters;
  sortBy?: SearchSortOption;
  page?: number;
  limit?: number;
}

export interface SearchFilters {
  categories?: string[];
  subcategories?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
}

export type SearchSortOption =
  | "relevance"
  | "price_asc"
  | "price_desc"
  | "name_asc"
  | "name_desc";

export interface SearchResult {
  products: Product[];
  totalResults: number;
  currentPage: number;
  totalPages: number;
  searchTerm: string;
  executionTime: number;
}

export interface SearchState {
  query: SearchQuery;
  results: SearchResult | null;
  isLoading: boolean;
  error: string | null;
  hasSearched: boolean;
}

export interface SearchAnalytics {
  searchTerm: string;
  resultsCount: number;
  timestamp: number;
  userAction?: "search" | "click" | "add_to_cart";
  productId?: number;
}

export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "brand";
  count: number;
}

export interface SearchBreadcrumb {
  home: string;
  searchTerm: string;
  resultsCount: number;
}
