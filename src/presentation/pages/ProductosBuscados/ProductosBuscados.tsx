import React from "react";
import { useParams } from "react-router-dom";

import { useProductSearch } from "../../hooks/useProductSearch";
import { SearchResultCard } from "../../components/search/SearchResultCard/SearchResultCard";
import { SearchSortFilter } from "../../components/search/SearchSortFilter/SearchSortFilter";
import { useProductCart } from "../../hooks";
// import NotFound from "../../../Components/NotFound/NotFound";
import { SEOHead } from "../../components/UI/SEOHead/SEOHead";
import { Breadcrumb } from "../../components/UI/Breadcrumb/Breadcrumb";
import { Pagination } from "../../components/UI/Pagination/Pagination";
import "./ProductosBuscados.scss";
import NotFound from "../../components/UI/NotFound/NotFound";

const ProductosBuscados: React.FC = () => {
  const { producto } = useParams<{ producto: string }>();

  const {
    searchResults,
    isLoading,
    error,
    hasSearched,
    currentQuery,
    performSearch,
    changeSortBy,
    changePage,
    hasResults,
    noResults,
    totalResults,
  } = useProductSearch({
    searchTerm: producto,
    itemsPerPage: 20,
  });

  const { addToCart } = useProductCart({
    products: searchResults?.products || [],
  });

  const seoData = producto
    ? {
        title: `Búsqueda: ${producto} - Tienda Doraemon`,
        description: `Resultados de búsqueda para "${producto}". ${totalResults} productos encontrados.`,
        keywords: [producto, "búsqueda", "doraemon", "tienda"],
        image: searchResults?.products[0]?.imagen || "",
        price: 0,
        currency: "EUR",
        availability: "variable",
      }
    : null;

  const breadcrumbItems = [
    { label: "INICIO", path: "/" },
    { label: `Búsqueda: ${producto}`, isActive: true },
  ];

  const handleAddToCart = (productId: number): void => {
    addToCart(productId.toString());
  };

  if (isLoading) {
    return (
      <div className="productosBuscados loading">
        <div className="loading-container">
          <p>Buscando productos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="productosBuscados error">
        <div className="error-container">
          <h2>Error en la búsqueda</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (noResults) {
    return <NotFound />;
  }

  if (!hasSearched) {
    return null;
  }

  return (
    <>
      {seoData && <SEOHead seoData={seoData} />}

      <div className="productosBuscados">
        <div className="contenedor-card">
          <div className="categorias">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {hasResults && (
            <SearchSortFilter
              currentSort={currentQuery.sortBy || "relevance"}
              onSortChange={changeSortBy}
              resultsCount={totalResults}
            />
          )}

          {hasResults && (
            <div className="container-card">
              {searchResults!.products.map((product) => (
                <SearchResultCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  searchTerm={producto}
                />
              ))}
            </div>
          )}

          {hasResults && searchResults!.totalPages > 1 && (
            <div className="botones-de-paginacion">
              <Pagination
                currentPage={searchResults!.currentPage}
                totalPages={searchResults!.totalPages}
                visiblePages={Array.from(
                  { length: Math.min(5, searchResults!.totalPages) },
                  (_, i) => i + 1
                )}
                canGoPrevious={searchResults!.currentPage > 1}
                canGoNext={
                  searchResults!.currentPage < searchResults!.totalPages
                }
                onGoToPage={changePage}
                onGoToPrevious={() =>
                  changePage(searchResults!.currentPage - 1)
                }
                onGoToNext={() => changePage(searchResults!.currentPage + 1)}
              />
            </div>
          )}

          {hasResults && (
            <div className="search-info">
              <p>
                Búsqueda completada en {searchResults!.executionTime.toFixed(2)}
                ms
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductosBuscados;
