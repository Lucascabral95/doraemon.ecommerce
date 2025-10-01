import { useCallback } from "react";
import storeZustand from "../../Components/zustand";
import { Product } from "../../infrastructure/types/product.types";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

import { useWishListFirestore } from "./useWishListFirestore";

export const useWishlist = () => {
  const { wishList, setWishList } = storeZustand();
  const { addToWishlistFirestore, removeFromWishlistFirestore } =
    useWishListFirestore({ wishList });

  const addToWishlist = useCallback(
    async (product: Product) => {
      try {
        const isAlreadyInWishlist = wishList.some(
          (item: Product) => item.id === product.id
        );

        if (isAlreadyInWishlist) {
          console.log("El producto ya está en la lista de deseos");
          return false;
        }

        const updatedWishlist = [...wishList, product];
        setWishList(updatedWishlist);
        // localStorage.setItem("WishList", JSON.stringify(updatedWishlist)); // Ya no se guarda mas en el localStorage

        // Sincronizar con Firestore
        // const auth = getAuth();
        // if (!auth.currentUser) {
        //   return false;
        // }

        // const docRef = doc(db, "listaDeDeseados", auth.currentUser.uid);
        // await setDoc(
        //   docRef,
        //   { listaDeDeseados: updatedWishlist },
        //   { merge: true }
        // );
        await addToWishlistFirestore(product);

        return true;
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        return false;
      }
    },
    [wishList, setWishList]
  );
  ////
  ////
  ////
  const removeFromWishlist = useCallback(
    async (productId: number): Promise<boolean> => {
      try {
        const updatedWishlist = wishList.filter(
          (item: Product) => item.id !== productId
        );
        setWishList(updatedWishlist);
        // localStorage.setItem("WishList", JSON.stringify(updatedWishlist)); // Ya no se guarda mas en el localStorage
        await removeFromWishlistFirestore(productId);

        return true;
      } catch (error) {
        console.error("Error removing from wishlist:", error);
        return false;
      }
    },
    [wishList, setWishList]
  );

  ///////
  ///////
  ///////
  ///////

  const toggleWishlist = useCallback(
    async (product: Product) => {
      const isInWishlist = wishList.some(
        (item: Product) => item.id === product.id
      );

      if (isInWishlist) {
        return removeFromWishlist(product.id);
      } else {
        return addToWishlist(product);
      }
    },
    [wishList, addToWishlist, removeFromWishlist]
  );

  const isInWishlist = useCallback(
    (productId: number) => {
      return wishList.some((item: Product) => item.id === productId);
    },
    [wishList]
  );

  return {
    wishList,
    wishlistCount: wishList.length,

    addToWishlist,
    removeFromWishlist,
    toggleWishlist,

    isInWishlist,
  };
};
