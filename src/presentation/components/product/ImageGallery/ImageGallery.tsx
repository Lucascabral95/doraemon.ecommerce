// presentation/components/product/ImageGallery/ImageGallery.tsx
import React from "react";
import Skeleton from "react-loading-skeleton";

interface ImageGalleryProps {
  images: string[];
  productTitle: string;
  onImageClick: (index: number) => void;
  isLoading?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  productTitle,
  onImageClick,
  isLoading = false,
}) => {
  const mainImage = images[0] || "";
  const thumbnailImages = images.slice(1);

  return (
    <div className="contenedor-imagen">
      <div className="imagen-grande" onClick={() => onImageClick(0)}>
        <img src={mainImage} alt={productTitle} loading="lazy" />
      </div>

      <div className="imagenes-extras">
        {isLoading && thumbnailImages.length > 0
          ? thumbnailImages.map((_, index) => (
              <Skeleton key={`skeleton-${index}`} width={100} height={100} />
            ))
          : thumbnailImages.map((image, index) =>
              image && image.trim() ? (
                <img
                  key={`thumb-${index}`}
                  onClick={() => onImageClick(index + 1)}
                  src={image}
                  alt="Imagen complementaria"
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                />
              ) : null
            )}
      </div>
    </div>
  );
};
