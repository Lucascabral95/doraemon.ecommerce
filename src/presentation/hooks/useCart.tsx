import { useState, useEffect, useCallback } from "react";
import storeZustand from "../../Components/zustand";

interface CartItem {
  id: number;
  texto: string;
  imagen: string;
  precio: number;
  cantidad: number;
  descripcion?: string;
}

export const useCart = () => {
  const { cantidadArticulossss, setCantidadArticulossss } = storeZustand();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Cargar carrito inicial
  useEffect(() => {
    const storedCart = localStorage.getItem("carritoDoraemon");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (error) {
        console.error("Error parsing cart:", error);
        setCart([]);
      }
    }
  }, [cantidadArticulossss]);

  // Actualizar localStorage
  const updateCartInStorage = useCallback((updatedCart: CartItem[]) => {
    localStorage.setItem("carritoDoraemon", JSON.stringify(updatedCart));
    setCart(updatedCart);
  }, []);

  // Calcular totales
  const cartTotals = {
    total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    itemCount: cart.reduce((acc, item) => acc + item.cantidad, 0),
  };

  // Actualizar cantidad en Zustand
  useEffect(() => {
    setCantidadArticulossss(cartTotals.itemCount);
  }, [cartTotals.itemCount, setCantidadArticulossss]);

  // Funciones del carrito
  const increaseQuantity = useCallback(
    (id: number) => {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      updateCartInStorage(updatedCart);
    },
    [cart, updateCartInStorage]
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      const updatedCart = cart.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
      updateCartInStorage(updatedCart);
    },
    [cart, updateCartInStorage]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      updateCartInStorage(updatedCart);

      if (updatedCart.length === 0) {
        window.location.reload();
      }
    },
    [cart, updateCartInStorage]
  );

  return {
    cart,
    cartTotals,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  };
};
