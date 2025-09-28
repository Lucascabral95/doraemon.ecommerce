import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../infrastructure/types/product.types";
import { ProductService } from "../../../../infrastructure/services/product.service";
import storeZustand from "../../../../Components/zustand";

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const styleButtonDisabled = (acceso: boolean) => {
  if (!acceso) {
    return {
      opacity: 0.5,
      cursor: "not-allowed",
    };
  }
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const mainImage = ProductService.getMainImage(product);
  const formattedPrice = ProductService.formatPrice(product.precio);
  const isAvailable = ProductService.isAvailable(product);
  const { acceso } = storeZustand();

  return (
    <div className="contenedor-card">
      <div className="imagen-cart">
        <div
          className={`icono ${!isAvailable ? "disabled" : ""}`}
          onClick={isAvailable ? onAddToCart : undefined}
          style={styleButtonDisabled(acceso)}
        >
          <svg
            fill="#009FE3"
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
          <img src={mainImage} alt={product.descripcion} loading="lazy" />
        </Link>
      </div>

      <div className="texto">
        <Link to={`/detalle/${product.texto}`}>
          <span>{product.texto}</span>
        </Link>
      </div>

      <div className="precio">
        <span>{formattedPrice}</span>
        {!isAvailable && <span className="stock-status">Sin stock</span>}
      </div>
    </div>
  );
};
