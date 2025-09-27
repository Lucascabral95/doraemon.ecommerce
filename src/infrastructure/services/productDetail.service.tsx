import { Product } from "../types/product.types";
import {
  ProductBreadcrumb,
  RelatedProductsConfig,
} from "../types/productDetail.types";

export class ProductDetailService {
  static findProductByName(
    products: Product[],
    productName: string
  ): Product | null {
    try {
      const decodedName = decodeURIComponent(productName);
      const found = products.find(
        (product) => product.texto.toLowerCase() === decodedName.toLowerCase()
      );
      return found || null;
    } catch (error) {
      console.error("Error searching for product:", error);
      return null;
    }
  }

  static getProductImages(product: Product): string[] {
    const images: string[] = [];

    if (product.imagen && product.imagen.trim()) {
      images.push(product.imagen);
    }

    if (product.otrasImagenes && product.otrasImagenes.length > 0) {
      const { imagen1, imagen2, imagen3 } = product.otrasImagenes[0];

      if (imagen1 && imagen1.trim()) images.push(imagen1);
      if (imagen2 && imagen2.trim()) images.push(imagen2);
      if (imagen3 && imagen3.trim()) images.push(imagen3);
    }

    return [...new Set(images)].filter((img) => img && img.trim() !== "");
  }

  static generateBreadcrumb(product: Product): ProductBreadcrumb {
    return {
      home: "INICIO",
      category: product.categoria?.toUpperCase() || "",
      subcategory: product.subcategoria?.toUpperCase(),
      product: product.texto.toUpperCase(),
    };
  }

  static getRelatedProducts(
    allProducts: Product[],
    currentProduct: Product,
    config: RelatedProductsConfig = {
      maxItems: 4,
      strategy: "subcategory",
      excludeCurrentProduct: true,
    }
  ): Product[] {
    let related: Product[] = [];

    switch (config.strategy) {
      case "subcategory":
        related = allProducts.filter(
          (product) => product.subcategoria === currentProduct.subcategoria
        );
        break;

      case "category":
        related = allProducts.filter(
          (product) => product.categoria === currentProduct.categoria
        );
        break;

      case "mixed":
        const bySubcategory = allProducts.filter(
          (product) => product.subcategoria === currentProduct.subcategoria
        );

        if (bySubcategory.length >= config.maxItems) {
          related = bySubcategory;
        } else {
          const byCategory = allProducts.filter(
            (product) =>
              product.categoria === currentProduct.categoria &&
              !bySubcategory.some((sub) => sub.id === product.id)
          );
          related = [...bySubcategory, ...byCategory];
        }
        break;
    }

    if (config.excludeCurrentProduct) {
      related = related.filter((product) => product.id !== currentProduct.id);
    }

    return related.sort(() => Math.random() - 0.5).slice(0, config.maxItems);
  }

  static validateProductAvailability(product: Product): {
    isAvailable: boolean;
    maxQuantity: number;
    message?: string;
  } {
    if (!product) {
      return {
        isAvailable: false,
        maxQuantity: 0,
        message: "Producto no encontrado",
      };
    }

    if (product.stock <= 0) {
      return {
        isAvailable: false,
        maxQuantity: 0,
        message: "Producto sin stock",
      };
    }

    return { isAvailable: true, maxQuantity: product.stock };
  }

  static generateSEOData(product: Product) {
    const keywords = [
      product.texto,
      product.categoria,
      product.subcategoria,
      product.subcategoria2,
      "doraemon",
      "tienda oficial",
    ].filter((keyword): keyword is string => Boolean(keyword));

    return {
      title: `${product.texto} - Tienda Doraemon`,
      description:
        product.descripcion ||
        product.detalles ||
        `Compra ${product.texto} en nuestra tienda oficial`,
      keywords,
      image: product.imagen || "",
      price: product.precio,
      currency: "EUR",
      availability: product.stock > 0 ? "in_stock" : "out_of_stock",
    };
  }

  static generateStructuredData(product: Product) {
    return {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.texto,
      description: product.descripcion || product.detalles,
      image: product.imagen,
      sku: product.codigo,
      offers: {
        "@type": "Offer",
        price: product.precio,
        priceCurrency: "EUR",
        availability:
          product.stock > 0
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
      },
    };
  }
}
