import React from "react";

import "./ProductSkeleton.scss";

const ProductSkeleton: React.FC = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-card">
        <div className="skeleton-image" />
        <div className="skeleton-text" />
        <div className="skeleton-price" />
      </div>
    </div>
  );
};

export default ProductSkeleton;
