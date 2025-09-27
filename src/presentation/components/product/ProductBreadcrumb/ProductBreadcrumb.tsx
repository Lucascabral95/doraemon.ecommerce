import React from "react";
import { Link } from "react-router-dom";
import { ProductBreadcrumb as BreadcrumbType } from "../../../../infrastructure/types/productDetail.types";

interface ProductBreadcrumbProps {
  breadcrumb?: BreadcrumbType;
}

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({
  breadcrumb,
}) => {
  if (!breadcrumb) return null;

  return (
    <div className="informacion-superior">
      <span>
        <Link to="/">
          <span className="link">{breadcrumb.home} /</span>
        </Link>
        <Link to={`/categoria/${breadcrumb.category?.toLowerCase()}`}>
          <span className="link">{breadcrumb.category}</span>
        </Link>
        {breadcrumb.subcategory && (
          <>
            /
            <Link to={`/categoria/${breadcrumb.subcategory?.toLowerCase()}`}>
              <span className="link">{breadcrumb.subcategory}</span>
            </Link>
          </>
        )}
        /<span className="link">{breadcrumb.product}</span>
      </span>
    </div>
  );
};
