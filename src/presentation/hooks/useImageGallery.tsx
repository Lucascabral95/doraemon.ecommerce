import { useState, useCallback, useEffect } from "react";
import { ImageZoomState } from "../../infrastructure/types/productDetail.types";

interface UseImageGalleryProps {
  images: string[];
}

export const useImageGallery = ({ images }: UseImageGalleryProps) => {
  const [zoomState, setZoomState] = useState<ImageZoomState>({
    isOpen: false,
    currentImageIndex: 0,
    images: images,
  });

  useEffect(() => {
    setZoomState((prev) => ({ ...prev, images }));
  }, [images]);

  const openZoom = useCallback(
    (imageIndex: number = 0) => {
      if (imageIndex >= 0 && imageIndex < images.length) {
        setZoomState((prev) => ({
          ...prev,
          isOpen: true,
          currentImageIndex: imageIndex,
        }));
      }
    },
    [images.length]
  );

  const closeZoom = useCallback(() => {
    setZoomState((prev) => ({ ...prev, isOpen: false }));
  }, []);
  const nextImage = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      currentImageIndex: (prev.currentImageIndex + 1) % prev.images.length,
    }));
  }, []);

  const previousImage = useCallback(() => {
    setZoomState((prev) => ({
      ...prev,
      currentImageIndex:
        prev.currentImageIndex > 0
          ? prev.currentImageIndex - 1
          : prev.images.length - 1,
    }));
  }, []);

  const goToImage = useCallback(
    (index: number) => {
      if (index >= 0 && index < images.length) {
        setZoomState((prev) => ({ ...prev, currentImageIndex: index }));
      }
    },
    [images.length]
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!zoomState.isOpen) return;

      switch (event.key) {
        case "Escape":
          closeZoom();
          break;
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          previousImage();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [zoomState.isOpen, closeZoom, nextImage, previousImage]);

  const currentImage = images[zoomState.currentImageIndex] || "";
  const hasMultipleImages = images.length > 1;

  return {
    isZoomOpen: zoomState.isOpen,
    currentImageIndex: zoomState.currentImageIndex,
    currentImage,

    openZoom,
    closeZoom,
    nextImage,
    previousImage,
    goToImage,

    hasMultipleImages,
    canGoNext: zoomState.currentImageIndex < images.length - 1,
    canGoPrevious: zoomState.currentImageIndex > 0,
    totalImages: images.length,
  };
};
