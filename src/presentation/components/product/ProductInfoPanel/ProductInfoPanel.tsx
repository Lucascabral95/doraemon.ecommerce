import React from "react";
import { ProductService } from "../../../../infrastructure/services/product.service";

interface ProductInfoPanelProps {
  title: string;
  description: string;
  price: number;
  availability: {
    isAvailable: boolean;
    maxQuantity: number;
    message?: string;
  };
  children?: React.ReactNode;
}

export const ProductInfoPanel: React.FC<ProductInfoPanelProps> = ({
  title,
  description,
  price,
  availability,
  children,
}) => {
  const formattedPrice = ProductService.formatPrice(price);

  return (
    <div className="contenedor-big-data">
      <div className="titulo-producto">
        <span>{title}</span>
      </div>

      <div className="detalles-producto">
        <div className="descripcion-producto">
          <span style={{ whiteSpace: "pre-line" }}>{description}</span>
        </div>

        <div className="precio-producto">
          <span className="precio">{formattedPrice}</span>
          <span className="impuestos">Impuestos incluidos</span>
          {!availability.isAvailable && availability.message && (
            <div className="stock-warning">{availability.message}</div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};
