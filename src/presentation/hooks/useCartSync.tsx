import { useEffect } from "react";
import {
  CartItem,
  NavigationStore,
} from "../../infrastructure/types/navigation.types";

interface UseCartSyncProps {
  cart: CartItem[];
  setCantidadArticulossss: NavigationStore["setCantidadArticulossss"];
}

export const useCartSync = ({
  cart,
  setCantidadArticulossss,
}: UseCartSyncProps) => {
  useEffect(() => {
    const nuevaCantidad =
      cart?.reduce((acc, item) => acc + (item?.cantidad || 0), 0) || 0;
    setCantidadArticulossss(nuevaCantidad);
  }, [cart, setCantidadArticulossss]);
};
