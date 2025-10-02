import { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { getAuth } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

import storeZustand from "../../Components/zustand";
import { Product, CartProduct } from "../../infrastructure/types/product.types";
import { db } from "../../infrastructure/config/firebase.config";

interface UseProductCartProps {
  products: Product[];
}

export const useProductCart = ({ products }: UseProductCartProps) => {
  const { cart, setCantidadArticulossss } = storeZustand();

  const [localCart, setLocalCart] = useState<CartProduct[]>([]);
  const [isCartLoading, setIsCartLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadCartFromStorage = (): void => {
      try {
        setIsCartLoading(true);
        const savedCart = localStorage.getItem("carritoDoraemon");

        if (savedCart) {
          const parsedCart: CartProduct[] = JSON.parse(savedCart);
          setLocalCart(parsedCart);

          const totalQuantity = parsedCart.reduce(
            (acc, item) => acc + item.cantidad,
            0
          );
          setCantidadArticulossss(totalQuantity);
        } else {
          setLocalCart([]);
          setCantidadArticulossss(0);
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        setLocalCart([]);
        setCantidadArticulossss(0);
      } finally {
        setIsCartLoading(false);
      }
    };

    loadCartFromStorage();
  }, [setCantidadArticulossss]);

  useEffect(() => {
    if (cart && Array.isArray(cart) && cart.length > 0) {
      const totalQuantity = cart.reduce((acc: number, item: any) => {
        return acc + (item.cantidad || 0);
      }, 0);
      setCantidadArticulossss(totalQuantity);
    }
  }, [cart, setCantidadArticulossss]);

  const saveCartToStorage = async (newCart: CartProduct[]): Promise<void> => {
    try {
      localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));

      // Agregar al carrito de Firebase
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        console.warn("Usuario no autenticado");
        return;
      }
      const useCartRef = doc(db, "guardarEnCarrito", user.uid);

      await setDoc(
        useCartRef,
        {
          carrito: newCart,
        },
        { merge: true }
      );
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
      toast.error("Error al guardar el carrito", {
        description:
          "No se pudo actualizar el carrito en el almacenamiento local",
      });
    }
  };

  const addToCart = useCallback(
    async (productId: string, quantity: number): Promise<void> => {
      try {
        const productIdNum = parseInt(productId, 10);

        const selectedProduct = products.find(
          (product) => product.id === productIdNum
        );

        if (!selectedProduct) {
          console.error("Product not found:", productId);
          toast.error("Producto no encontrado", {
            description: "No se pudo agregar el producto al carrito",
          });
          return;
        }

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
          console.warn("Usuario no autenticado");
          toast.warning("Debes iniciar sesión", {
            description: "Inicia sesión para agregar productos al carrito",
          });
          return;
        }

        const docRef = doc(db, "guardarEnCarrito", user.uid);

        const docSnap = await getDoc(docRef);

        let currentCart: CartProduct[] = [];
        if (docSnap.exists()) {
          currentCart = docSnap.data().carrito || [];
        }

        const currentQuantity =
          currentCart.find((item) => item.id === productIdNum)?.cantidad || 0;

        if (currentQuantity >= selectedProduct.stock) {
          toast.warning("Stock insuficiente", {
            description: `Solo hay ${selectedProduct.stock} unidades disponibles`,
          });
          return;
        }

        const existingProductIndex = currentCart.findIndex(
          (item) => item.id === productIdNum
        );

        let updatedCart: CartProduct[];

        if (existingProductIndex >= 0) {
          updatedCart = currentCart.map((item) =>
            item.id === productIdNum
              ? { ...item, cantidad: item.cantidad + quantity }
              : item
          );
        } else {
          const newCartProduct: CartProduct = {
            ...selectedProduct,
            cantidad: quantity,
            addedAt: new Date().toISOString(),
          };
          updatedCart = [...currentCart, newCartProduct];
        }

        await setDoc(docRef, { carrito: updatedCart }, { merge: true });

        const totalQuantity = updatedCart.reduce(
          (acc, item) => acc + item.cantidad,
          0
        );
        setCantidadArticulossss(totalQuantity);

        toast.success("Producto agregado al carrito", {
          description: `${
            selectedProduct.texto
          } - €${selectedProduct.precio.toFixed(2)}`,
          duration: 2500,
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error("Error al agregar producto", {
          description: "No se pudo agregar el producto al carrito",
        });
      }
    },
    [products, setCantidadArticulossss]
  );

  const removeFromCart = useCallback(
    async (productId: string) => {
      const productIdNum = parseInt(productId, 10);
      const productToRemove = localCart.find(
        (item) => item.id === productIdNum
      );

      setLocalCart((prevCart) => {
        const updatedCart = prevCart.filter(
          (item: any) => item.id !== productIdNum
        );

        saveCartToStorage(updatedCart);

        const totalQuantity = updatedCart.reduce(
          (acc, item) => acc + item.cantidad,
          0
        );
        setCantidadArticulossss(totalQuantity);

        if (productToRemove) {
          toast.info("Producto eliminado", {
            description: `${productToRemove.texto} removido del carrito`,
            duration: 2000,
          });
        }

        return updatedCart;
      });
    },
    [saveCartToStorage, setCantidadArticulossss, localCart]
  );
  ///////

  const updateProductQuantity = useCallback(
    (productId: string, newQuantity: number): void => {
      const productIdNum = parseInt(productId, 10);

      if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
      }

      const selectedProduct = products.find((p) => p.id === productIdNum);

      if (selectedProduct && newQuantity > selectedProduct.stock) {
        toast.warning("Stock insuficiente", {
          description: `Solo hay ${selectedProduct.stock} unidades disponibles`,
        });
        return;
      }

      setLocalCart((prevCart) => {
        const updatedCart = prevCart.map((item) =>
          item.id === productIdNum
            ? { ...item, cantidad: Math.max(1, newQuantity) }
            : item
        );

        saveCartToStorage(updatedCart);

        const totalQuantity = updatedCart.reduce(
          (acc, item) => acc + item.cantidad,
          0
        );
        setCantidadArticulossss(totalQuantity);

        return updatedCart;
      });
    },
    [removeFromCart, saveCartToStorage, setCantidadArticulossss, products]
  );

  const clearCart = useCallback((): void => {
    setLocalCart([]);
    saveCartToStorage([]);
    setCantidadArticulossss(0);

    toast.success("Carrito vaciado", {
      description: "Todos los productos han sido removidos",
    });
  }, [saveCartToStorage, setCantidadArticulossss]);

  const getProductQuantity = useCallback(
    (productId: string): number => {
      const productIdNum = parseInt(productId, 10);
      const cartItem = localCart.find((item) => item.id === productIdNum);
      return cartItem?.cantidad || 0;
    },
    [localCart]
  );

  const isInCart = useCallback(
    (productId: string): boolean => {
      const productIdNum = parseInt(productId, 10);
      return localCart.some((item) => item.id === productIdNum);
    },
    [localCart]
  );

  const cartStats = useMemo(() => {
    const totalItems = localCart.reduce((acc, item) => acc + item.cantidad, 0);
    const totalPrice = localCart.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
    const uniqueItems = localCart.length;

    return {
      totalItems,
      totalPrice,
      uniqueItems,
      isEmpty: totalItems === 0,
    };
  }, [localCart]);

  return {
    cart: localCart,
    isCartLoading,
    cartItemsCount: cartStats.totalItems,
    cartTotalPrice: cartStats.totalPrice,
    uniqueItemsCount: cartStats.uniqueItems,
    isCartEmpty: cartStats.isEmpty,

    addToCart,
    removeFromCart,
    updateProductQuantity,
    clearCart,

    getProductQuantity,
    isInCart,

    cartStats,
  };
};
