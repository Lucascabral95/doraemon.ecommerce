import { useState, useEffect, useCallback, useMemo } from "react";
import {
  SearchState,
  SearchQuery,
  SearchSortOption,
} from "../../infrastructure/types/search.types";
import { SearchService } from "../../infrastructure/services/search.service";
import { productDataManager } from "../../infrastructure/data/productData";
import { Product } from "../../infrastructure/types/product.types";

interface UseProductSearchProps {
  searchTerm?: string;
  initialSortBy?: SearchSortOption;
  itemsPerPage?: number;
}

export const useProductSearch = ({
  searchTerm = "",
  initialSortBy = "relevance",
  itemsPerPage = 20,
}: UseProductSearchProps) => {
  const [state, setState] = useState<SearchState>({
    query: {
      term: searchTerm,
      sortBy: initialSortBy,
      page: 1,
      limit: itemsPerPage,
    },
    results: null,
    isLoading: false,
    error: null,
    hasSearched: false,
  });

  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        await productDataManager.loadData();
        setAllProducts(productDataManager.getAllProducts());
      } catch (error) {
        console.error("Error loading products for search:", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm && searchTerm.trim() && allProducts.length > 0) {
      performSearch(searchTerm);
    }
  }, [searchTerm, allProducts]);

  const performSearch = useCallback(
    async (term: string, options?: Partial<SearchQuery>) => {
      if (!term || !term.trim()) {
        setState((prev) => ({
          ...prev,
          results: null,
          hasSearched: false,
          error: null,
        }));
        return;
      }

      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const query: SearchQuery = {
          ...state.query,
          term: term.trim(),
          ...options,
        };

        const searchResults = SearchService.searchProducts(allProducts, query);

        SearchService.trackSearch({
          searchTerm: term,
          resultsCount: searchResults.totalResults,
          timestamp: Date.now(),
          userAction: "search",
        });

        setState((prev) => ({
          ...prev,
          query,
          results: searchResults,
          isLoading: false,
          hasSearched: true,
          error: null,
        }));
      } catch (error) {
        console.error("Search error:", error);
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: "Error al realizar la búsqueda",
          hasSearched: true,
        }));
      }
    },
    [allProducts, state.query]
  );

  const changeSortBy = useCallback(
    (sortBy: SearchSortOption) => {
      if (state.query.term) {
        performSearch(state.query.term, { sortBy, page: 1 });
      }
    },
    [performSearch, state.query.term]
  );

  const changePage = useCallback(
    (page: number) => {
      if (
        state.query.term &&
        page > 0 &&
        page <= (state.results?.totalPages || 1)
      ) {
        performSearch(state.query.term, { page });
      }
    },
    [performSearch, state.query.term, state.results]
  );

  const suggestions = useMemo(() => {
    if (!state.query.term || state.query.term.length < 2) return [];
    return SearchService.generateSuggestions(allProducts, state.query.term);
  }, [allProducts, state.query.term]);

  const popularSearches = useMemo(() => {
    return SearchService.getPopularSearches(5);
  }, []);

  return {
    searchResults: state.results,
    isLoading: state.isLoading,
    error: state.error,
    hasSearched: state.hasSearched,

    currentQuery: state.query,

    performSearch,
    changeSortBy,
    changePage,

    suggestions,
    popularSearches,

    hasResults: Boolean(state.results && state.results.products.length > 0),
    noResults: Boolean(
      state.hasSearched && state.results && state.results.products.length === 0
    ),
    totalResults: state.results?.totalResults || 0,
  };
};
