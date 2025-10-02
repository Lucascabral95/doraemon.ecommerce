import React from "react";
import { useParams } from "react-router-dom";

import {
  useProductDetail,
  useImageGallery,
  useQuantitySelector,
  useWishlist,
  useProductCart,
} from "../../hooks";
import { ProductBreadcrumb } from "../../components/product/ProductBreadcrumb/ProductBreadcrumb";
import { ImageGallery } from "../../components/product/ImageGallery/ImageGallery";
import { ImageZoomModal } from "../../components/product/ImageZoomModal/ImageZoomModal";
import { ProductInfoPanel } from "../../components/product/ProductInfoPanel/ProductInfoPanel";
import { QuantitySelector } from "../../components/product/QuantitySelector/QuantitySelector";
import { WishlistButton } from "../../components/product/WishListButton/WishListButton";
import { RelatedProducts } from "../../components/product/RelatedProducts/RelatedProducts";
import { ProductAdditionalInfo } from "../../components/product/ProductAdditionalInfo/ProductAdditionalInfo";
import { SEOHead } from "../../components/UI/SEOHead/SEOHead";
import storeZustand from "../../../Components/zustand";
import "./ItemDetailContainer.scss";

const styleButtonAddToCart = (
  isAvailable: boolean,
  isAuthenticated: boolean
) => {
  const isActive = isAvailable && isAuthenticated;
  return {
    opacity: isActive ? 1 : 0.5,
    cursor: isActive ? "pointer" : "not-allowed",
  };
};

const ItemDetailContainer: React.FC = () => {
  const { producto } = useParams<{ producto: string }>();
  const { acceso } = storeZustand();

  const {
    product,
    relatedProducts,
    isLoading,
    error,
    notFound,
    seoData,
    availability,
    hasAdditionalInfo,
  } = useProductDetail({ productName: producto });

  const {
    isZoomOpen,
    currentImageIndex,
    currentImage,
    openZoom,
    closeZoom,
    nextImage,
    previousImage,
    goToImage,
    hasMultipleImages,
    totalImages,
  } = useImageGallery({
    images: product?.allImages || [],
  });

  // Selector de cantidad
  const {
    quantity,
    increment,
    decrement,
    setQuantity,
    canIncrement,
    canDecrement,
    validation,
  } = useQuantitySelector({
    initialQuantity: 1,
    maxQuantity: availability.maxQuantity,
    minQuantity: 1,
  });

  const { addToCart } = useProductCart({
    products: product ? [product] : [],
  });

  const { addToWishlist, isInWishlist, toggleWishlist } = useWishlist();

  const handleAddToCart = (): void => {
    if (product && availability.isAvailable) {
      for (let i = 0; i < quantity; i++) {
        //addToCart(product.id.toString());
        addToCart(product.id.toString(), quantity);
      }
    }
  };

  const handleToggleWishlist = (): void => {
    if (product) {
      toggleWishlist(product);
    }
  };

  if (isLoading) {
    return (
      <div className="original">
        <div className="itemDetailContainer loading">
          <div className="loading-container">
            <p>Cargando detalles del producto...</p>
            <div className="loading-skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  if (notFound || !product) {
    return (
      <div className="original">
        <div className="itemDetailContainer error">
          <div className="error-container">
            <h2>Producto no encontrado</h2>
            <p>
              {error || "El producto que buscas no existe o ha sido eliminado."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="original">
      {seoData && <SEOHead seoData={seoData} />}

      <ImageZoomModal
        isOpen={isZoomOpen}
        images={product.allImages || []}
        currentIndex={currentImageIndex}
        onClose={closeZoom}
        onNext={nextImage}
        onPrevious={previousImage}
        onGoToImage={goToImage}
      />

      <div className="itemDetailContainer">
        <div className="contenedor-detalle">
          <ProductBreadcrumb breadcrumb={product.breadcrumb} />

          <div className="contenedor-imagen-big-data">
            <ImageGallery
              images={product.allImages || []}
              productTitle={product.texto}
              onImageClick={openZoom}
              isLoading={isLoading}
            />

            <ProductInfoPanel
              title={product.texto}
              description={product.detalles}
              price={product.precio}
              availability={availability}
            >
              <div className="cantidad-producto">
                <span>CANTIDAD</span>
              </div>

              <div className="cantidad-agregacion-favoritos">
                <div className="carrito-uno">
                  <QuantitySelector
                    quantity={quantity}
                    onIncrement={increment}
                    onDecrement={decrement}
                    onSetQuantity={setQuantity}
                    canIncrement={canIncrement}
                    canDecrement={canDecrement}
                    maxQuantity={availability.maxQuantity}
                    disabled={!availability.isAvailable}
                  />

                  <div className="carrito" onClick={handleAddToCart}>
                    <button
                      style={styleButtonAddToCart(
                        availability.isAvailable,
                        acceso
                      )}
                      disabled={!availability.isAvailable || !acceso}
                    >
                      {availability.isAvailable
                        ? "AÑADIR AL CARRITO"
                        : "SIN STOCK"}
                    </button>
                  </div>
                </div>

                <WishlistButton
                  isInWishlist={isInWishlist(product.id)}
                  onToggle={handleToggleWishlist}
                  disabled={!availability.isAvailable}
                />
              </div>
            </ProductInfoPanel>
          </div>
        </div>
      </div>

      {hasAdditionalInfo && (
        <ProductAdditionalInfo
          title="más información"
          content={product.informacion || ""}
        />
      )}

      <RelatedProducts
        products={relatedProducts}
        title="TAMBIÉN PODRÍA INTERESARTE"
        hasAdditionalInfo={hasAdditionalInfo}
      />
    </div>
  );
};

export default ItemDetailContainer;
