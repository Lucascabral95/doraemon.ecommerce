import { Product, CategoryDetails } from "../types/product.types";

import ArticulosJSON from "../../Json/Articulos.json";
import DetallesCategoriaJSON from "../../Json/DetallesCategoria.json";

export class ProductDataManager {
  private static instance: ProductDataManager;
  private products: Product[] = [];
  private categoryDetails: CategoryDetails[] = [];
  private isLoaded = false;

  private constructor() {}

  static getInstance(): ProductDataManager {
    if (!ProductDataManager.instance) {
      ProductDataManager.instance = new ProductDataManager();
    }
    return ProductDataManager.instance;
  }

  async loadData(): Promise<void> {
    if (this.isLoaded) return;

    try {
      this.products = ArticulosJSON as Product[];
      this.categoryDetails = DetallesCategoriaJSON as CategoryDetails[];
      this.isLoaded = true;

      console.log(`✅ Loaded ${this.products.length} products`);
      console.log(`✅ Loaded ${this.categoryDetails.length} categories`);
    } catch (error) {
      console.error("❌ Error loading product data:", error);
      throw error;
    }
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getCategoryDetails(): CategoryDetails[] {
    return this.categoryDetails;
  }

  isDataLoaded(): boolean {
    return this.isLoaded;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  getProductsByCategory(categoria: string): Product[] {
    return this.products.filter(
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
  }
}

export const productDataManager = ProductDataManager.getInstance();
