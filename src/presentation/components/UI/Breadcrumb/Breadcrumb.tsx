import React from "react";
import { Link } from "react-router-dom";
import { BreadcrumbItem } from "../../../../infrastructure/types/product.types";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <div className="contenedor-inicio-categoria">
    <div className="inicio-categoria">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.path ? (
            <Link to={item.path}>
              <span className="texto">{item.label}</span>
            </Link>
          ) : (
            <span className="texto">{item.label}</span>
          )}
          {index < items.length - 1 && <span> / </span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);
