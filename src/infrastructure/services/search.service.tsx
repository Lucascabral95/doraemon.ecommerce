import { Product } from "../types/product.types";
import {
  SearchQuery,
  SearchResult,
  SearchFilters,
  SearchSortOption,
  SearchSuggestion,
  SearchAnalytics,
} from "../types/search.types";

export class SearchService {
  static searchProducts(products: Product[], query: SearchQuery): SearchResult {
    const startTime = performance.now();

    let filteredProducts = this.filterBySearchTerm(products, query.term);

    if (query.filters) {
      filteredProducts = this.applyFilters(filteredProducts, query.filters);
    }

    filteredProducts = this.sortResults(
      filteredProducts,
      query.sortBy || "relevance",
      query.term
    );

    const page = query.page || 1;
    const limit = query.limit || 20;
    const totalResults = filteredProducts.length;
    const totalPages = Math.ceil(totalResults / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

    const endTime = performance.now();

    return {
      products: paginatedProducts,
      totalResults,
      currentPage: page,
      totalPages,
      searchTerm: query.term,
      executionTime: endTime - startTime,
    };
  }

  private static filterBySearchTerm(
    products: Product[],
    term: string
  ): Product[] {
    if (!term || term.trim() === "") return products;

    const searchTerm = term.toLowerCase().trim();
    const searchWords = searchTerm.split(" ");

    return products.filter((product) => {
      const searchFields = [
        product.texto,
        product.descripcion,
        product.detalles,
        product.categoria,
        product.subcategoria,
        product.subcategoria2,
        product.subcategoria4,
        product.codigo,
      ]
        .filter(Boolean)
        .map((field) => field?.toLowerCase() || "");

      return searchWords.every((word) =>
        searchFields.some((field) => field.includes(word))
      );
    });
  }

  private static applyFilters(
    products: Product[],
    filters: SearchFilters
  ): Product[] {
    let filtered = [...products];

    if (filters.categories && filters.categories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.categories!.includes(product.categoria)
      );
    }

    if (filters.subcategories && filters.subcategories.length > 0) {
      filtered = filtered.filter((product) =>
        filters.subcategories!.some(
          (sub) =>
            product.subcategoria === sub ||
            product.subcategoria2 === sub ||
            product.subcategoria4 === sub
        )
      );
    }

    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      filtered = filtered.filter(
        (product) => product.precio >= min && product.precio <= max
      );
    }

    if (filters.inStock) {
      filtered = filtered.filter((product) => product.stock > 0);
    }

    return filtered;
  }

  private static sortResults(
    products: Product[],
    sortBy: SearchSortOption,
    searchTerm: string
  ): Product[] {
    const sorted = [...products];

    switch (sortBy) {
      case "relevance":
        return this.sortByRelevance(sorted, searchTerm);

      case "price_asc":
        return sorted.sort((a, b) => a.precio - b.precio);

      case "price_desc":
        return sorted.sort((a, b) => b.precio - a.precio);

      case "name_asc":
        return sorted.sort((a, b) => a.texto.localeCompare(b.texto));

      case "name_desc":
        return sorted.sort((a, b) => b.texto.localeCompare(a.texto));

      default:
        return sorted;
    }
  }

  private static sortByRelevance(
    products: Product[],
    searchTerm: string
  ): Product[] {
    const term = searchTerm.toLowerCase();

    return products.sort((a, b) => {
      const scoreA = this.calculateRelevanceScore(a, term);
      const scoreB = this.calculateRelevanceScore(b, term);
      return scoreB - scoreA;
    });
  }

  private static calculateRelevanceScore(
    product: Product,
    term: string
  ): number {
    let score = 0;

    if (product.texto.toLowerCase().includes(term)) {
      score += 100;
      if (product.texto.toLowerCase().startsWith(term)) {
        score += 50;
      }
    }

    if (product.categoria.toLowerCase().includes(term)) {
      score += 30;
    }

    if (product.subcategoria?.toLowerCase().includes(term)) {
      score += 20;
    }

    if (product.descripcion?.toLowerCase().includes(term)) {
      score += 10;
    }

    if (product.codigo.toLowerCase().includes(term)) {
      score += 15;
    }

    if (product.stock > 0) {
      score += 5;
    }

    return score;
  }

  static generateSuggestions(
    products: Product[],
    term: string,
    limit: number = 5
  ): SearchSuggestion[] {
    if (!term || term.length < 2) return [];

    const suggestions: Map<string, SearchSuggestion> = new Map();
    const searchTerm = term.toLowerCase();

    products.forEach((product) => {
      if (product.texto.toLowerCase().includes(searchTerm)) {
        const key = product.texto.toLowerCase();
        if (!suggestions.has(key)) {
          suggestions.set(key, {
            text: product.texto,
            type: "product",
            count: 1,
          });
        } else {
          suggestions.get(key)!.count++;
        }
      }

      if (product.categoria.toLowerCase().includes(searchTerm)) {
        const key = `cat_${product.categoria.toLowerCase()}`;
        if (!suggestions.has(key)) {
          suggestions.set(key, {
            text: product.categoria,
            type: "category",
            count: 1,
          });
        } else {
          suggestions.get(key)!.count++;
        }
      }
    });

    return Array.from(suggestions.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }

  static trackSearch(analytics: SearchAnalytics): void {
    try {
      const searchHistory = JSON.parse(
        localStorage.getItem("search_analytics") || "[]"
      );
      searchHistory.push(analytics);

      const limitedHistory = searchHistory.slice(-100);
      localStorage.setItem("search_analytics", JSON.stringify(limitedHistory));

      console.log("🔍 Search tracked:", analytics);
    } catch (error) {
      console.error("Error tracking search:", error);
    }
  }

  static getPopularSearches(limit: number = 10): string[] {
    try {
      const searchHistory: SearchAnalytics[] = JSON.parse(
        localStorage.getItem("search_analytics") || "[]"
      );

      const termCounts = new Map<string, number>();

      searchHistory.forEach((search) => {
        const count = termCounts.get(search.searchTerm) || 0;
        termCounts.set(search.searchTerm, count + 1);
      });

      return Array.from(termCounts.entries())
        .sort(([, a], [, b]) => b - a)
        .slice(0, limit)
        .map(([term]) => term);
    } catch (error) {
      console.error("Error getting popular searches:", error);
      return [];
    }
  }
}
