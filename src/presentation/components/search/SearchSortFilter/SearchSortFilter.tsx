import React, { useState } from "react";
import { SearchSortOption } from "../../../../infrastructure/types/search.types";

interface SearchSortFilterProps {
  currentSort: SearchSortOption;
  onSortChange: (sort: SearchSortOption) => void;
  resultsCount: number;
}

const SORT_OPTIONS: { value: SearchSortOption; label: string }[] = [
  { value: "relevance", label: "Relevancia" },
  { value: "price_asc", label: "Precio: menor a mayor" },
  { value: "price_desc", label: "Precio: mayor a menor" },
  { value: "name_asc", label: "Nombre: A-Z" },
  { value: "name_desc", label: "Nombre: Z-A" },
];

export const SearchSortFilter: React.FC<SearchSortFilterProps> = ({
  currentSort,
  onSortChange,
  resultsCount,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentSortLabel =
    SORT_OPTIONS.find((opt) => opt.value === currentSort)?.label ||
    "Relevancia";

  const handleSortSelect = (sortOption: SearchSortOption) => {
    onSortChange(sortOption);
    setIsOpen(false);
  };

  return (
    <div className="filtre">
      <div className="results-info">
        <span>
          {resultsCount} resultado{resultsCount !== 1 ? "s" : ""} encontrado
          {resultsCount !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="boton">
        <button onClick={() => setIsOpen(!isOpen)}>
          Ordenar por {currentSortLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            width="9"
            height="5.56"
            viewBox="0 0 9 5.56"
          >
            <path d="M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z" />
          </svg>
        </button>

        {isOpen && (
          <div className="sort-dropdown">
            {SORT_OPTIONS.map((option) => (
              <div
                key={option.value}
                className={`sort-option ${
                  currentSort === option.value ? "active" : ""
                }`}
                onClick={() => handleSortSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
