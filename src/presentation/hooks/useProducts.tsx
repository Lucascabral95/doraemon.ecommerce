import { useState, useEffect, useMemo } from "react";
import {
  Product,
  CategoryDetails,
} from "../../infrastructure/types/product.types";
import { ProductService } from "../../infrastructure/services/product.service";
import { productDataManager } from "../../infrastructure/data/productData";

interface UseProductsProps {
  categoria?: string;
}

export const useProducts = ({ categoria }: UseProductsProps) => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categoryDetails, setCategoryDetails] = useState<CategoryDetails[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const initializeData = async () => {
      try {
        await productDataManager.loadData();
        setAllProducts(productDataManager.getAllProducts());
        setCategoryDetails(productDataManager.getCategoryDetails());
        setIsDataLoaded(true);
      } catch (error) {
        console.error("Error initializing product data:", error);
        setIsDataLoaded(true);
      }
    };

    initializeData();
  }, []);

  const currentCategoryDetails = useMemo(() => {
    if (!categoria || !isDataLoaded) return null;
    return (
      categoryDetails.find((detail) => detail.Categoria === categoria) || null
    );
  }, [categoria, categoryDetails, isDataLoaded]);

  const filteredProducts = useMemo(() => {
    if (!categoria || !isDataLoaded) return allProducts;
    return ProductService.filterProductsByCategory(allProducts, categoria);
  }, [allProducts, categoria, isDataLoaded]);

  useEffect(() => {
    if (!isDataLoaded) return;

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [categoria, isDataLoaded]);

  return {
    allProducts,
    filteredProducts,
    currentCategoryDetails,

    isLoading: isLoading || !isDataLoaded,
    isDataLoaded,

    totalProducts: filteredProducts.length,
    categoryImage: currentCategoryDetails?.Imagen || "",
    categoryDescription: currentCategoryDetails?.TextoDescripcion || "",
    hasProducts: filteredProducts.length > 0,
  };
};
