import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

import { useCart } from "../../hooks";
import { db } from "../../../Components/Firebase-config";
import CuerpoVacio from "../../../Components/Login/LoginSecciones/CuerpoVacio";
import { CartItem } from "../../components/cart/CartItem";
import { GiftItem } from "../../components/cart/GiftItem";
import { CartSummary } from "../../components/cart/CartSummary";
import {
  GIFT_PRODUCTS,
  GIFT_THRESHOLD,
  LOADING_DELAY,
} from "../../../infrastructure/constants";
import "./Checkout.scss";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const {
    cart,
    cartTotals,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orders, setOrders] = useState<any[]>([]);

  const giftProduct =
    cartTotals.total <= GIFT_THRESHOLD
      ? GIFT_PRODUCTS.lapiz
      : GIFT_PRODUCTS.gorrocoptero;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DELAY);
    return () => clearTimeout(timer);
  }, [cart]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ordenes"));
        const ordersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchOrders();
  }, []);

  const handleGiftError = () => {
    Swal.fire({
      title: "Error",
      text: `Solo puedes tener un ${giftProduct.descripcion} en tu carrito.`,
      icon: "error",
      imageWidth: 400,
      imageHeight: 200,
    });
  };

  const handlePurchase = () => {
    window.location.reload();
    window.location.href = "/checkout/fin";
  };

  if (cart.length === 0) {
    return (
      <CuerpoVacio
        sinCuadrado="si"
        titulo="CESTA DE LA COMPRA"
        texto="No tienes ningún artículo en el carrito por el momento."
        textoExtra="Hola"
        textoAbono="Agregá artículos al carrito para poder visualizarlos por acá."
      />
    );
  }

  return (
    <div className="productosBuscados checkout">
      <div className="contenedor-card">
        <div className="contenedor-checkout">
          <div className="categorias">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              INICIO
            </Link>
          </div>
          <div className="titulo-titulo">
            <span className="titulo">CESTA DE LA COMPRA</span>
          </div>

          <div className="contenedor-compra">
            <div className="contenedor-articulos">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  item={item}
                  isLoading={isLoading}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                  onRemove={removeFromCart}
                />
              ))}

              <GiftItem
                gift={giftProduct}
                isLoading={isLoading}
                onGiftError={handleGiftError}
              />

              <div className="d-flex justify-content-center align-items-center">
                <div className="boton-ver-mas-productos">
                  <Link to="/categoria/Pelicula">
                    <span>VER MÁS PRODUCTOS</span>
                  </Link>
                </div>
              </div>
            </div>

            <CartSummary
              itemCount={cartTotals.itemCount}
              total={cartTotals.total}
              giftName={giftProduct.texto}
              onPurchase={handlePurchase}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
