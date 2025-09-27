import { useState, useEffect, useMemo, useCallback } from "react";

import { PaginationUtils } from "../../infrastructure/utils/pagination.utils";
import { PaginationState } from "../../infrastructure/types/product.types";
import { ITEMS_PER_PAGE } from "../../infrastructure/constants/categories.constants";

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  resetTrigger?: any;
}

export const usePagination = ({
  totalItems,
  itemsPerPage = ITEMS_PER_PAGE,
  resetTrigger,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const paginationState = useMemo<PaginationState>(() => {
    return PaginationUtils.calculatePaginationState(totalItems, currentPage, {
      itemsPerPage,
    });
  }, [totalItems, currentPage, itemsPerPage]);

  const visiblePages = useMemo(() => {
    return PaginationUtils.getVisiblePages(
      currentPage,
      paginationState.totalPages,
      5
    );
  }, [currentPage, paginationState.totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [resetTrigger]);

  const goToPage = useCallback(
    (page: number): void => {
      if (page >= 1 && page <= paginationState.totalPages) {
        setCurrentPage(page);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    [paginationState.totalPages]
  );

  const goToPrevious = useCallback((): void => {
    if (PaginationUtils.canGoPrevious(currentPage)) {
      goToPage(currentPage - 1);
    }
  }, [currentPage, goToPage]);

  const goToNext = useCallback((): void => {
    if (PaginationUtils.canGoNext(currentPage, paginationState.totalPages)) {
      goToPage(currentPage + 1);
    }
  }, [currentPage, paginationState.totalPages, goToPage]);

  const goToFirst = useCallback((): void => {
    goToPage(1);
  }, [goToPage]);

  const goToLast = useCallback((): void => {
    goToPage(paginationState.totalPages);
  }, [goToPage, paginationState.totalPages]);

  return {
    currentPage,
    totalPages: paginationState.totalPages,
    totalItems: paginationState.totalItems,
    itemsPerPage: paginationState.itemsPerPage,

    startIndex: paginationState.startIndex,
    endIndex: paginationState.endIndex,

    visiblePages,

    canGoPrevious: PaginationUtils.canGoPrevious(currentPage),
    canGoNext: PaginationUtils.canGoNext(
      currentPage,
      paginationState.totalPages
    ),

    goToPage,
    goToPrevious,
    goToNext,
    goToFirst,
    goToLast,

    isFirstPage: currentPage === 1,
    isLastPage: currentPage === paginationState.totalPages,
    hasPagination: paginationState.totalPages > 1,

    displayInfo: {
      showing: Math.min(paginationState.endIndex, totalItems),
      from: paginationState.startIndex + 1,
      to: Math.min(paginationState.endIndex, totalItems),
      total: totalItems,
    },
  };
};
