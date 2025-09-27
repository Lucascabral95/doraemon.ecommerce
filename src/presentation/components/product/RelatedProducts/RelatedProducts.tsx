import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../../../infrastructure/types/product.types";
import { ProductService } from "../../../../infrastructure/services/product.service";

interface RelatedProductsProps {
  products: Product[];
  title: string;
  hasAdditionalInfo?: boolean;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  title,
  hasAdditionalInfo = false,
}) => {
  if (products.length === 0) return null;

  return (
    <div
      className="infooooo"
      style={{ marginTop: hasAdditionalInfo ? "-7%" : "0%" }}
    >
      <div className="mas-informacion-dos">
        <div className="titulo">
          <h2 className="puede-interesarte-titulo">{title}</h2>
          <div className="puede-interesarte">
            {products.map((product) => (
              <div key={product.id} className="contenedor-puede-interesarte">
                <div className="contenedor-mayor">
                  <div className="imagen-interesante">
                    <Link to={`/detalle/${encodeURIComponent(product.texto)}`}>
                      <img
                        src={ProductService.getMainImage(product)}
                        alt={product.descripcion}
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <div className="texto-texto">
                    <div>
                      <Link
                        to={`/detalle/${encodeURIComponent(product.texto)}`}
                      >
                        <p className="textt">{product.texto}</p>
                      </Link>
                    </div>
                  </div>

                  <div className="precio-precio">
                    <div className="precio">
                      <p>{ProductService.formatPrice(product.precio)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
