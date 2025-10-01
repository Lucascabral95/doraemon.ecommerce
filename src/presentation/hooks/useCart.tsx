import { useEffect, useCallback } from "react";
import { toast } from "sonner";
import storeZustand from "../../Components/zustand";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

interface CartItem {
  id: number;
  texto: string;
  imagen: string;
  precio: number;
  cantidad: number;
  descripcion?: string;
}

export const useCart = () => {
  const { cantidadArticulossss, setCantidadArticulossss, cart } =
    storeZustand();

  const updateCartInStorage = useCallback(async (updatedCart: CartItem[]) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.warn("Usuario no autenticado");
        return;
      }

      const docRef = doc(db, "guardarEnCarrito", user.uid);

      await setDoc(docRef, { carrito: updatedCart }, { merge: true });
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Error al actualizar el carrito", {
        description: "No se pudieron guardar los cambios",
      });
    }
  }, []);

  const cartTotals = {
    total: cart.reduce(
      (acc: number, item: CartItem) => acc + item.precio * item.cantidad,
      0
    ),
    itemCount: cart.reduce(
      (acc: number, item: CartItem) => acc + item.cantidad,
      0
    ),
  };

  useEffect(() => {
    setCantidadArticulossss(cartTotals.itemCount);
  }, [cartTotals.itemCount, setCantidadArticulossss]);

  const increaseQuantity = useCallback(
    (id: number) => {
      const item = cart.find((item: CartItem) => item.id === id);

      const updatedCart = cart.map((item: CartItem) =>
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
      const item = cart.find((item: CartItem) => item.id === id);

      const updatedCart = cart.map((item: CartItem) =>
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
      const itemToRemove = cart.find((item: CartItem) => item.id === id);
      const updatedCart = cart.filter((item: CartItem) => item.id !== id);

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

  const clearCart = useCallback(async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.warn("Usuario no autenticado");
      return;
    }

    const docRef = doc(db, "guardarEnCarrito", user.uid);
    await setDoc(docRef, { carrito: [] }, { merge: true });

    console.log(`Intento de vacio de carrito`);

    updateCartInStorage([]);
  }, [updateCartInStorage]);

  return {
    cart,
    cartTotals,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
};
