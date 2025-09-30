import { useState, useEffect, useCallback } from "react";
import { toast } from "sonner";
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

  useEffect(() => {
    const storedCart = localStorage.getItem("carritoDoraemon");
    if (storedCart) {
      try {
        const parsedCart = JSON.parse(storedCart);
        setCart(Array.isArray(parsedCart) ? parsedCart : []);
      } catch (error) {
        console.error("Error parsing cart:", error);
        setCart([]);
        toast.error("Error al cargar el carrito", {
          description: "No se pudieron recuperar los productos guardados",
        });
      }
    }
  }, [cantidadArticulossss]);

  const updateCartInStorage = useCallback((updatedCart: CartItem[]) => {
    try {
      localStorage.setItem("carritoDoraemon", JSON.stringify(updatedCart));
      setCart(updatedCart);
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Error al actualizar el carrito", {
        description: "No se pudieron guardar los cambios",
      });
    }
  }, []);

  const cartTotals = {
    total: cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0),
    itemCount: cart.reduce((acc, item) => acc + item.cantidad, 0),
  };

  useEffect(() => {
    setCantidadArticulossss(cartTotals.itemCount);
  }, [cartTotals.itemCount, setCantidadArticulossss]);

  const increaseQuantity = useCallback(
    (id: number) => {
      const item = cart.find((item) => item.id === id);

      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      );
      updateCartInStorage(updatedCart);

      if (item) {
        toast.success("Cantidad actualizada", {
          description: `${item.texto} - ${item.cantidad + 1} unidades`,
        });
      }
    },
    [cart, updateCartInStorage]
  );

  const decreaseQuantity = useCallback(
    (id: number) => {
      const item = cart.find((item) => item.id === id);

      const updatedCart = cart.map((item) =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      );
      updateCartInStorage(updatedCart);

      if (item && item.cantidad > 1) {
        toast.info("Cantidad actualizada", {
          description: `${item.texto} - ${item.cantidad - 1} unidades`,
        });
      }
    },
    [cart, updateCartInStorage]
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const itemToRemove = cart.find((item) => item.id === id);
      const updatedCart = cart.filter((item) => item.id !== id);

      updateCartInStorage(updatedCart);

      if (itemToRemove) {
        toast.error("Producto eliminado del carrito", {
          description: `${itemToRemove.texto} - €${itemToRemove.precio.toFixed(
            2
          )}`,
        });
      }

      if (updatedCart.length === 0) {
        toast.info("Carrito vacío", {
          description: "Se eliminaron todos los productos",
        });

        setTimeout(() => {
          window.location.reload();
        }, 1500);
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
