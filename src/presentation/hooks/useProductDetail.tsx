import { useState, useEffect, useMemo } from "react";

import {
  ProductDetailState,
  ProductWithDetails,
} from "../../infrastructure/types/productDetail.types";
import { ProductDetailService } from "../../infrastructure/services/productDetail.service";
import { productDataManager } from "../../infrastructure/data/productData";

interface UseProductDetailProps {
  productName?: string;
}

export const useProductDetail = ({ productName }: UseProductDetailProps) => {
  const [state, setState] = useState<ProductDetailState>({
    product: null,
    relatedProducts: [],
    isLoading: true,
    error: null,
    notFound: false,
  });

  useEffect(() => {
    const loadProductDetail = async () => {
      if (!productName) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          notFound: true,
          error: "Nombre de producto no proporcionado",
        }));
        return;
      }

      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        await productDataManager.loadData();
        const allProducts = productDataManager.getAllProducts();

        const foundProduct = ProductDetailService.findProductByName(
          allProducts,
          productName
        );

        if (!foundProduct) {
          setState((prev) => ({
            ...prev,
            isLoading: false,
            notFound: true,
            error: "Producto no encontrado",
          }));
          return;
        }

        const relatedProducts = ProductDetailService.getRelatedProducts(
          allProducts,
          foundProduct,
          { maxItems: 4, strategy: "subcategory", excludeCurrentProduct: true }
        );

        setState((prev) => ({
          ...prev,
          product: foundProduct,
          relatedProducts,
          isLoading: false,
          notFound: false,
          error: null,
        }));
      } catch (error) {
        console.error("Error loading product detail:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Error al cargar el producto",
          notFound: true,
        }));
      }
    };

    const timer = setTimeout(loadProductDetail, 100);
    return () => clearTimeout(timer);
  }, [productName]);

  const enrichedProduct = useMemo<ProductWithDetails | null>(() => {
    if (!state.product) return null;

    return {
      ...state.product,
      breadcrumb: ProductDetailService.generateBreadcrumb(state.product),
      allImages: ProductDetailService.getProductImages(state.product),
    };
  }, [state.product]);

  const seoData = useMemo(() => {
    if (!state.product) return null;
    return ProductDetailService.generateSEOData(state.product);
  }, [state.product]);

  const availability = useMemo(() => {
    if (!state.product) return { isAvailable: false, maxQuantity: 0 };
    return ProductDetailService.validateProductAvailability(state.product);
  }, [state.product]);

  return {
    product: enrichedProduct,
    relatedProducts: state.relatedProducts,
    isLoading: state.isLoading,
    error: state.error,
    notFound: state.notFound,

    seoData,
    availability,

    hasAdditionalInfo: Boolean(state.product?.informacion?.trim()),
    hasMultipleImages: (enrichedProduct?.allImages?.length || 0) > 1,
  };
};
