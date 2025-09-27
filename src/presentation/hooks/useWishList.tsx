import { useCallback } from "react";
import storeZustand from "../../Components/zustand";
import { Product } from "../../infrastructure/types/product.types";

export const useWishlist = () => {
  const { wishList, setWishList } = storeZustand();

  const addToWishlist = useCallback(
    (product: Product): boolean => {
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
        localStorage.setItem("WishList", JSON.stringify(updatedWishlist));

        return true;
      } catch (error) {
        console.error("Error adding to wishlist:", error);
        return false;
      }
    },
    [wishList, setWishList]
  );

  const removeFromWishlist = useCallback(
    (productId: number): boolean => {
      try {
        const updatedWishlist = wishList.filter(
          (item: Product) => item.id !== productId
        );
        setWishList(updatedWishlist);
        localStorage.setItem("WishList", JSON.stringify(updatedWishlist));

        return true;
      } catch (error) {
        console.error("Error removing from wishlist:", error);
        return false;
      }
    },
    [wishList, setWishList]
  );

  const toggleWishlist = useCallback(
    (product: Product): boolean => {
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
    (productId: number): boolean => {
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
