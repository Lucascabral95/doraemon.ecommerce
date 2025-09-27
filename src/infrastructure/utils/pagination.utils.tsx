import { PaginationState, PaginationConfig } from "../types/product.types";

export class PaginationUtils {
  static calculatePaginationState(
    totalItems: number,
    currentPage: number,
    config: PaginationConfig = {}
  ): PaginationState {
    const { itemsPerPage = 16 } = config;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    return {
      currentPage,
      itemsPerPage,
      totalItems,
      totalPages,
      startIndex,
      endIndex,
    };
  }

  static getVisiblePages(
    currentPage: number,
    totalPages: number,
    maxVisible: number = 5
  ): number[] {
    const pages: number[] = [];
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  static canGoPrevious(currentPage: number): boolean {
    return currentPage > 1;
  }

  static canGoNext(currentPage: number, totalPages: number): boolean {
    return currentPage < totalPages;
  }
}
