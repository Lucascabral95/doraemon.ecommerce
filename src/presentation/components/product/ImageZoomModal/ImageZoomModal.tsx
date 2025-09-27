import React from "react";

interface ImageZoomModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onGoToImage: (index: number) => void;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  onGoToImage,
}) => {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <div className="imagenEnGrande" onClick={onClose}>
      <div className="contenedor-imagen" onClick={(e) => e.stopPropagation()}>
        <img src={currentImage} alt="Imagen ampliada" />

        {hasMultipleImages && (
          <div className="image-navigation">
            <button
              className="nav-button prev"
              onClick={onPrevious}
              disabled={currentIndex === 0}
            >
              ‹
            </button>
            <button
              className="nav-button next"
              onClick={onNext}
              disabled={currentIndex === images.length - 1}
            >
              ›
            </button>

            <div className="image-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}

        <button className="close-button" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};
