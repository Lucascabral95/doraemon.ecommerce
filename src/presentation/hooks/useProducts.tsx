import { useMemo } from "react";
import { useProductStore } from "../../store/useProductStore";

interface UseProductsProps {
  categoria?: string;
}

export const useProducts = ({ categoria }: UseProductsProps) => {
  const { products, isLoaded, getProductsByCategory, getCategoryDetails } = useProductStore();

  const filteredProducts = useMemo(() => {
    if (!categoria) return products;
    return getProductsByCategory(categoria);
  }, [products, categoria, getProductsByCategory]);

  const currentCategoryDetails = useMemo(() => {
    if (!categoria) return null;
    return getCategoryDetails(categoria);
  }, [categoria, getCategoryDetails]);

  return {
    allProducts: products,
    filteredProducts,
    currentCategoryDetails,

    isLoading: !isLoaded,
    isDataLoaded: isLoaded,

    totalProducts: filteredProducts.length,
    categoryImage: currentCategoryDetails?.Imagen || "",
    categoryDescription: currentCategoryDetails?.TextoDescripcion || "",
    hasProducts: filteredProducts.length > 0,
  };
};
