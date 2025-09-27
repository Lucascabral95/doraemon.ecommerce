import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  visiblePages: number[];
  canGoPrevious: boolean;
  canGoNext: boolean;
  onGoToPage: (page: number) => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  visiblePages,
  canGoPrevious,
  canGoNext,
  onGoToPage,
  onGoToPrevious,
  onGoToNext,
}) => (
  <div className="botones-de-paginacion">
    {canGoPrevious && (
      <svg
        onClick={onGoToPrevious}
        xmlns="http://www.w3.org/2000/svg"
        className="pagination__link w-4 h-4 fill-current"
        width="6.6"
        height="11.7"
        viewBox="0 0 6.6 11.7"
        overflow="visible"
        style={{ cursor: "pointer" }}
      >
        <path
          fill="#4d4d4d"
          d="M5.854.036l.7.7-5.1 5.1 5.1 5.1-.7.8-5.9-5.9z"
        />
      </svg>
    )}

    {visiblePages.map((pageNum) => (
      <div className="paginacion-numeros" key={pageNum}>
        <button
          style={{
            color: pageNum === currentPage ? "red" : "#374151",
            fontWeight: pageNum === currentPage ? "bold" : "normal",
          }}
          onClick={() => onGoToPage(pageNum)}
        >
          {pageNum}
        </button>
      </div>
    ))}

    {canGoNext && (
      <svg
        onClick={onGoToNext}
        xmlns="http://www.w3.org/2000/svg"
        className="pagination__link w-4 h-4 fill-current"
        width="6.6"
        height="11.7"
        viewBox="0 0 6.6 11.7"
        overflow="visible"
        style={{ cursor: "pointer" }}
      >
        <path
          fill="#4d4d4d"
          d="M.754 11.736l-.8-.8 5.2-5.1-5.2-5.1.8-.7 5.8 5.8z"
        />
      </svg>
    )}
  </div>
);
