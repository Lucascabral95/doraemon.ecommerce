import { create } from "zustand";
import { Product, CategoryDetails } from "../infrastructure/types/product.types";
import { productDataManager } from "../infrastructure/data/productData";

interface ProductStore {
  products: Product[];
  categoryDetails: CategoryDetails[];
  isLoaded: boolean;
  isInitializing: boolean;
  error: string | null;
  
  initializeProducts: () => Promise<void>;
  getProductsByCategory: (categoria: string) => Product[];
  getCategoryDetails: (categoria: string) => CategoryDetails | null;
}

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  categoryDetails: [],
  isLoaded: false,
  isInitializing: false,
  error: null,

  initializeProducts: async () => {
    const state = get();
    
    if (state.isLoaded || state.isInitializing) {
      return;
    }

    set({ isInitializing: true, error: null });

    try {
      await productDataManager.loadData();
      
      const products = productDataManager.getAllProducts();
      const categoryDetails = productDataManager.getCategoryDetails();

      set({
        products,
        categoryDetails,
        isLoaded: true,
        isInitializing: false,
      });

      console.log("✅ Products loaded in Zustand store:", products.length);
    } catch (error) {
      console.error("❌ Error loading products:", error);
      set({
        error: error instanceof Error ? error.message : "Error loading products",
        isInitializing: false,
      });
    }
  },

  getProductsByCategory: (categoria: string) => {
    const { products } = get();
    
    if (!categoria) return products;

    return products.filter(
      (product) =>
        product.categoria === categoria ||
        product.subcategoria === categoria ||
        product.subcategoria2 === categoria ||
        product.subcategoria4 === categoria ||
        product.edades === categoria ||
        product.edades2 === categoria ||
        product.edadesCio === categoria ||
        product.edadesoo === categoria ||
        product.adulto === categoria
    );
  },

  getCategoryDetails: (categoria: string) => {
    const { categoryDetails } = get();
    return categoryDetails.find((detail) => detail.Categoria === categoria) || null;
  },
}));
