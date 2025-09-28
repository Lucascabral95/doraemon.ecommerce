import React, { useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { ITEMS_PER_PAGE } from "../../../infrastructure/constants/categories.constants";
import { ProductService } from "../../../infrastructure/services/product.service";

import { useProducts } from "../../hooks/useProducts";
import { Breadcrumb } from "../../components/UI/Breadcrumb/Breadcrumb";
import { CategoryHeader } from "../../components/category/CategoryHeader/CategoryHeader";
import { CategoryDashboard } from "../../components/category/CategoryDashboard/CategoryDashboard";
import { SortFilter } from "../../components/filters/SortFilter/SortFilter";
import { ProductGrid } from "../../components/product/ProductGrid/ProductGrid";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import { usePagination, useProductCart, useProductFilters } from "../../hooks";
import "./ItemListContainer.scss";

const ItemListContainer: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();

  const {
    filteredProducts,
    currentCategoryDetails,
    isLoading: isProductsLoading,
    categoryImage,
    categoryDescription,
    hasProducts,
  } = useProducts({ categoria });

  const {
    sortedProducts,
    sortOption,
    showFilters,
    sortOptions,
    currentSortLabel,
    handleSortChange,
    toggleFilters,
    closeFilters,
  } = useProductFilters({ products: filteredProducts });

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    visiblePages,
    canGoPrevious,
    canGoNext,
    goToPage,
    goToPrevious,
    goToNext,
  } = usePagination({
    totalItems: sortedProducts.length,
    itemsPerPage: ITEMS_PER_PAGE,
    resetTrigger: categoria,
  });

  const { addToCart, cartItemsCount } = useProductCart({
    products: sortedProducts,
  });

  const displayedProducts = React.useMemo(
    () =>
      ProductService.paginateProducts(
        sortedProducts,
        currentPage,
        ITEMS_PER_PAGE
      ),
    [sortedProducts, currentPage]
  );

  const breadcrumbItems = React.useMemo(
    () => [
      { label: "Inicio", path: "/" },
      { label: categoria || "", isActive: true },
    ],
    [categoria]
  );

  const handleAddToCart = useCallback(
    (productId: number): void => {
      addToCart(productId.toString());
    },
    [addToCart]
  );
  useEffect(() => {}, [categoria, cartItemsCount]);

  // if (isProductsLoading) {
  //   return (
  //     <div className="itemListContainer">
  //       <div className="loading-container">
  //         <p>Cargando productos...</p>
  //       </div>
  //     </div>
  //   );
  // }

  if (!hasProducts) {
    return (
      <div className="itemListContainer">
        <Breadcrumb items={breadcrumbItems} />
        <CategoryHeader
          title={categoria || ""}
          description="No se encontraron productos en esta categoría"
          image=""
        />
      </div>
    );
  }

  return (
    <div className="itemListContainer">
      <Breadcrumb items={breadcrumbItems} />

      <CategoryHeader
        title={categoria || ""}
        description={categoryDescription}
        image={categoryImage}
      />

      <div className="dashboard-card">
        <CategoryDashboard />

        <div className="filtro-card">
          <SortFilter
            currentSortLabel={currentSortLabel}
            sortOptions={sortOptions}
            showFilters={showFilters}
            onToggleFilters={toggleFilters}
            onSortChange={handleSortChange}
            onCloseFilters={closeFilters}
          />

          <ProductGrid
            products={displayedProducts}
            isLoading={isProductsLoading}
            onAddToCart={handleAddToCart}
            cartItemsCount={cartItemsCount}
          />

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              visiblePages={visiblePages}
              canGoPrevious={canGoPrevious}
              canGoNext={canGoNext}
              onGoToPage={goToPage}
              onGoToPrevious={goToPrevious}
              onGoToNext={goToNext}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
