import {
  Product,
  ProductFilters,
  SortOption,
  AgeCategory,
} from "../types/product.types";

export class ProductService {
  static filterProductsByCategory(
    products: Product[],
    categoria: string
  ): Product[] {
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
  }

  static sortProducts(products: Product[], sortOption: SortOption): Product[] {
    const sortedProducts = [...products];

    switch (sortOption) {
      case "PrecioMasBajo":
        return sortedProducts.sort((a, b) => a.precio - b.precio);

      case "PrecioMasAlto":
        return sortedProducts.sort((a, b) => b.precio - a.precio);

      case "Alfabetico":
        return sortedProducts.sort((a, b) => a.texto.localeCompare(b.texto));

      case "Normal":
      default:
        return sortedProducts;
    }
  }

  static searchProducts(products: Product[], searchTerm: string): Product[] {
    if (!searchTerm.trim()) return products;

    const term = searchTerm.toLowerCase();
    return products.filter(
      (product) =>
        product.texto.toLowerCase().includes(term) ||
        product.descripcion.toLowerCase().includes(term) ||
        product.detalles.toLowerCase().includes(term) ||
        product.categoria.toLowerCase().includes(term) ||
        product.codigo.toLowerCase().includes(term)
    );
  }

  static filterInStock(products: Product[]): Product[] {
    return products.filter((product) => product.stock > 0);
  }

  static filterByPriceRange(
    products: Product[],
    min: number,
    max: number
  ): Product[] {
    return products.filter(
      (product) => product.precio >= min && product.precio <= max
    );
  }

  static filterByAgeGroup(
    products: Product[],
    ageGroup: AgeCategory
  ): Product[] {
    return products.filter(
      (product) =>
        product.edades === ageGroup ||
        product.edades2 === ageGroup ||
        product.edadesCio === ageGroup ||
        product.edadesoo === ageGroup ||
        product.adulto === ageGroup
    );
  }

  static getAllCategories(products: Product[]): string[] {
    const categories = new Set<string>();

    products.forEach((product) => {
      if (product.categoria) categories.add(product.categoria);
      if (product.subcategoria) categories.add(product.subcategoria);
      if (product.subcategoria2) categories.add(product.subcategoria2);
      if (product.subcategoria4) categories.add(product.subcategoria4);
    });

    return Array.from(categories).sort();
  }

  static getAllAgeGroups(products: Product[]): AgeCategory[] {
    const ageGroups = new Set<AgeCategory>();

    products.forEach((product) => {
      if (product.edades) ageGroups.add(product.edades as AgeCategory);
      if (product.edades2) ageGroups.add(product.edades2 as AgeCategory);
      if (product.edadesCio) ageGroups.add(product.edadesCio as AgeCategory);
      if (product.edadesoo) ageGroups.add(product.edadesoo as AgeCategory);
      if (product.adulto) ageGroups.add(product.adulto as AgeCategory);
    });

    return Array.from(ageGroups).sort();
  }

  static getPriceRange(products: Product[]): { min: number; max: number } {
    if (products.length === 0) return { min: 0, max: 0 };

    const prices = products.map((p) => p.precio);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }

  static getMainImage(product: Product): string {
    if (product.imagen) return product.imagen;

    if (product.otrasImagenes?.[0]?.imagen1) {
      return product.otrasImagenes[0].imagen1;
    }

    return "";
  }

  static getAllImages(product: Product): string[] {
    const images: string[] = [];

    if (product.imagen) images.push(product.imagen);

    if (product.otrasImagenes?.[0]) {
      const { imagen1, imagen2, imagen3 } = product.otrasImagenes[0];
      if (imagen1) images.push(imagen1);
      if (imagen2) images.push(imagen2);
      if (imagen3) images.push(imagen3);
    }

    return images.filter((img) => img && img.trim() !== "");
  }

  static isAvailable(product: Product): boolean {
    return product.stock > 0;
  }

  static formatPrice(price: number): string {
    return `${price.toFixed(2)} €`;
  }

  static paginateProducts(
    products: Product[],
    currentPage: number,
    itemsPerPage: number
  ): Product[] {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return products.slice(startIndex, endIndex);
  }

  static getRelatedProducts(
    products: Product[],
    currentProduct: Product,
    limit: number = 4
  ): Product[] {
    return products
      .filter(
        (product) =>
          product.id !== currentProduct.id &&
          product.categoria === currentProduct.categoria
      )
      .slice(0, limit);
  }
}
