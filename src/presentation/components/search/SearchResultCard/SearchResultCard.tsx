import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../infrastructure/types/product.types";
import { ProductService } from "../../../../infrastructure/services/product.service";

interface SearchResultCardProps {
  product: Product;
  onAddToCart: (productId: number) => void;
  searchTerm?: string;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({
  product,
  onAddToCart,
  searchTerm,
}) => {
  const formattedPrice = ProductService.formatPrice(product.precio);
  const isAvailable = ProductService.isAvailable(product);
  const mainImage = ProductService.getMainImage(product);

  const handleAddToCart = () => {
    if (isAvailable) {
      onAddToCart(product.id);
    }
  };

  const highlightSearchTerm = (text: string, term?: string) => {
    if (!term || !text) return text;

    const regex = new RegExp(`(${term})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="search-highlight">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="cont-card">
      <div className="imagen-carrito">
        <div
          className={`icono ${!isAvailable ? "disabled" : ""}`}
          onClick={handleAddToCart}
          style={{ cursor: isAvailable ? "pointer" : "not-allowed" }}
        >
          <svg
            fill={isAvailable ? "#009FE3" : "#ccc"}
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            width="22.1"
            height="23.6"
            viewBox="0 0 22.1 23.6"
            overflow="visible"
          >
            <path d="M6.5 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" />
            <path d="M18.8 22.6c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2zm0-4.4c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2 1.2-.5 1.2-1.2-.5-1.2-1.2-1.2z" />
            <path d="M20.4 15.4H4.2L2 1H0v-2h3.8l.5 3.6h17.8l-1.7 12.8zM6 13.4h12.7l1.2-8.8H4.6L6 13.4z" />
          </svg>
        </div>

        <Link to={`/detalle/${encodeURIComponent(product.texto)}`}>
          <div className="imagen">
            <img src={mainImage} alt={product.descripcion} loading="lazy" />
          </div>
        </Link>
      </div>

      <div className="price-title">
        <div className="title">
          <Link to={`/detalle/${encodeURIComponent(product.texto)}`}>
            <span>{highlightSearchTerm(product.texto, searchTerm)}</span>
          </Link>
        </div>
        <div className="price">
          <span>{formattedPrice}</span>
          {!isAvailable && <span className="out-of-stock">Sin stock</span>}
        </div>
      </div>
    </div>
  );
};
