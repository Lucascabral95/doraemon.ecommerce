import { useState, useMemo, useCallback } from "react";
import { Product, SortOption } from "../../infrastructure/types/product.types";
import { ProductService } from "../../infrastructure/services/product.service";
import { SORT_OPTIONS } from "../../infrastructure/constants/categories.constants";

interface UseProductFiltersProps {
  products: Product[];
}

interface SortOptionItem {
  value: SortOption;
  label: string;
  isSelected: boolean;
}

export const useProductFilters = ({ products }: UseProductFiltersProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("Normal");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const sortedProducts = useMemo(() => {
    return ProductService.sortProducts(products, sortOption);
  }, [products, sortOption]);

  const sortOptions = useMemo<SortOptionItem[]>(() => {
    return Object.entries(SORT_OPTIONS).map(([key, label]) => ({
      value: key as SortOption,
      label,
      isSelected: sortOption === key,
    }));
  }, [sortOption]);

  const currentSortLabel = useMemo(() => {
    return SORT_OPTIONS[sortOption] || "Relevancia";
  }, [sortOption]);

  const handleSortChange = useCallback((newSortOption: SortOption): void => {
    setSortOption(newSortOption);
    setShowFilters(false);
  }, []);

  const toggleFilters = useCallback((): void => {
    setShowFilters((prev) => !prev);
  }, []);

  const closeFilters = useCallback((): void => {
    setShowFilters(false);
  }, []);

  const resetFilters = useCallback((): void => {
    setSortOption("Normal");
    setShowFilters(false);
  }, []);

  return {
    sortOption,
    showFilters,

    sortedProducts,

    sortOptions,
    currentSortLabel,

    handleSortChange,
    toggleFilters,
    closeFilters,
    resetFilters,

    hasFiltersApplied: sortOption !== "Normal",
    productsCount: sortedProducts.length,
  };
};
