import React from "react";
import { SortOption } from "../../../../infrastructure/types/product.types";

interface SortOptionItem {
  value: SortOption;
  label: string;
  isSelected: boolean;
}

interface SortFilterProps {
  currentSortLabel: string;
  sortOptions: SortOptionItem[];
  showFilters: boolean;
  onToggleFilters: () => void;
  onSortChange: (option: SortOption) => void;
  onCloseFilters: () => void;
}

export const SortFilter: React.FC<SortFilterProps> = ({
  currentSortLabel,
  sortOptions,
  showFilters,
  onToggleFilters,
  onSortChange,
  onCloseFilters,
}) => (
  <div className="filtro">
    <div className="filtro-div">
      <span>Ordenar por: </span>
      <button onClick={onToggleFilters}>{currentSortLabel}</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="fill-current ml-2"
        width="9"
        height="5.56"
        viewBox="0 0 9 5.56"
      >
        <path d="M9 1.06L7.94 0 4.5 3.44 1.06 0 0 1.06l4.5 4.5z"></path>
      </svg>
    </div>

    <div
      className="contenedor-de-filtros"
      style={{ display: showFilters ? "block" : "none" }}
    >
      <div className="cont-filtros shadow">
        {sortOptions.map((option, index) => (
          <p
            key={option.value}
            onClick={() => onSortChange(option.value)}
            style={{
              marginBottom:
                index === sortOptions.length - 1 ? "0px" : undefined,
            }}
          >
            {option.label}
          </p>
        ))}
      </div>
    </div>
  </div>
);
