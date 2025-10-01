import storeZustand from "../../Components/zustand";
import { CartItem } from "./useWishListOriginal";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";
import { toast } from "sonner";

export const useCartFirestore = () => {
  const { cart } = storeZustand();

  const updateCartInFirestore = async (updateCart: any) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.warn("Usuario no autenticado");
        return;
      }

      const docRef = doc(db, "guardarEnCarrito", user.uid);

      await setDoc(
        docRef,
        {
          carrito: updateCart,
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Error al actualizar el carrito", {
        description: "No se pudieron guardar los cambios",
      });
    }
  };

  const addToCart = async (item: CartItem) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.warn("Usuario no autenticado");
        return;
      }

      const docRef = doc(db, "guardarEnCarrito", user.uid);

      await setDoc(docRef, { carrito: item }, { merge: true });
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Error al actualizar el carrito", {
        description: "No se pudieron guardar los cambios",
      });
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.warn("Usuario no autenticado");
        return;
      }

      const docRef = doc(db, "guardarEnCarrito", user.uid);

      await setDoc(
        docRef,
        { carrito: cart.filter((item: CartItem) => item.id !== id) },
        { merge: true }
      );
    } catch (error) {
      console.error("Error saving cart:", error);
      toast.error("Error al actualizar el carrito", {
        description: "No se pudieron guardar los cambios",
      });
    }
  };

  return {
    updateCartInFirestore,
    addToCart,
    removeFromCart,
  };
};
