import React from "react";

import { Product } from "../../../../infrastructure/types/product.types";
import { ProductCard } from "../ProductCard/ProductCard";
import ProductSkeleton from "../ProductSkeleton/ProductSkeleton";

interface ProductGridProps {
  products: Product[];
  isLoading: boolean;
  onAddToCart: (productId: number) => void;
  cartItemsCount: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading,
  onAddToCart,
  cartItemsCount,
}) => (
  <div className="cardd">
    {isLoading
      ? products.map((_, index) => (
          <ProductSkeleton key={`skeleton-${index}`} />
        ))
      : products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
  </div>
);
