// import { useState, useEffect, useCallback, useMemo } from "react";
// import storeZustand from "../../Components/zustand";
// import { Product, CartProduct } from "../../infrastructure/types/product.types";

// interface UseProductCartProps {
//   products: Product[];
// }

// export const useProductCart = ({ products }: UseProductCartProps) => {
//   const { cart, setCantidadArticulossss } = storeZustand();

//   const [localCart, setLocalCart] = useState<CartProduct[]>([]);
//   const [isCartLoading, setIsCartLoading] = useState<boolean>(true);
//   useEffect(() => {
//     const loadCartFromStorage = (): void => {
//       try {
//         setIsCartLoading(true);
//         const savedCart = localStorage.getItem("carritoDoraemon");

//         if (savedCart) {
//           const parsedCart: CartProduct[] = JSON.parse(savedCart);
//           setLocalCart(parsedCart);

//           const totalQuantity = parsedCart.reduce(
//             (acc, item) => acc + item.cantidad,
//             0
//           );
//           setCantidadArticulossss(totalQuantity);
//         } else {
//           setLocalCart([]);
//           setCantidadArticulossss(0);
//         }
//       } catch (error) {
//         console.error("Error loading cart from localStorage:", error);
//         setLocalCart([]);
//         setCantidadArticulossss(0);
//       } finally {
//         setIsCartLoading(false);
//       }
//     };

//     loadCartFromStorage();
//   }, [setCantidadArticulossss]);

//   useEffect(() => {
//     if (cart && Array.isArray(cart) && cart.length > 0) {
//       const totalQuantity = cart.reduce((acc: number, item: any) => {
//         return acc + (item.cantidad || 0);
//       }, 0);
//       setCantidadArticulossss(totalQuantity);
//     }
//   }, [cart, setCantidadArticulossss]);

//   const saveCartToStorage = useCallback((newCart: CartProduct[]): void => {
//     try {
//       localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
//     } catch (error) {
//       console.error("Error saving cart to localStorage:", error);
//     }
//   }, []);

//   const addToCart = useCallback(
//     (productId: string): void => {
//       const productIdNum = parseInt(productId, 10);
//       const selectedProduct = products.find(
//         (product) => product.id === productIdNum
//       );

//       if (!selectedProduct) {
//         console.error("Product not found:", productId);
//         return;
//       }

//       setLocalCart((prevCart) => {
//         const existingProductIndex = prevCart.findIndex(
//           (item) => item.id === productIdNum
//         );
//         let updatedCart: CartProduct[];

//         if (existingProductIndex >= 0) {
//           updatedCart = prevCart.map((item) =>
//             item.id === productIdNum
//               ? { ...item, cantidad: item.cantidad + 1 }
//               : item
//           );
//         } else {
//           const newCartProduct: CartProduct = {
//             ...selectedProduct,
//             cantidad: 1,
//             addedAt: new Date().toISOString(),
//           };
//           updatedCart = [...prevCart, newCartProduct];
//         }

//         saveCartToStorage(updatedCart);

//         const totalQuantity = updatedCart.reduce(
//           (acc, item) => acc + item.cantidad,
//           0
//         );
//         setCantidadArticulossss(totalQuantity);

//         return updatedCart;
//       });
//     },
//     [products, saveCartToStorage, setCantidadArticulossss]
//   );

//   const removeFromCart = useCallback(
//     (productId: string): void => {
//       const productIdNum = parseInt(productId, 10);

//       setLocalCart((prevCart) => {
//         const updatedCart = prevCart.filter((item) => item.id !== productIdNum);

//         saveCartToStorage(updatedCart);

//         const totalQuantity = updatedCart.reduce(
//           (acc, item) => acc + item.cantidad,
//           0
//         );
//         setCantidadArticulossss(totalQuantity);

//         return updatedCart;
//       });
//     },
//     [saveCartToStorage, setCantidadArticulossss]
//   );

//   const updateProductQuantity = useCallback(
//     (productId: string, newQuantity: number): void => {
//       const productIdNum = parseInt(productId, 10);

//       if (newQuantity <= 0) {
//         removeFromCart(productId);
//         return;
//       }

//       setLocalCart((prevCart) => {
//         const updatedCart = prevCart.map((item) =>
//           item.id === productIdNum
//             ? { ...item, cantidad: Math.max(1, newQuantity) }
//             : item
//         );

//         saveCartToStorage(updatedCart);

//         const totalQuantity = updatedCart.reduce(
//           (acc, item) => acc + item.cantidad,
//           0
//         );
//         setCantidadArticulossss(totalQuantity);

//         return updatedCart;
//       });
//     },
//     [removeFromCart, saveCartToStorage, setCantidadArticulossss]
//   );

//   const clearCart = useCallback((): void => {
//     setLocalCart([]);
//     saveCartToStorage([]);
//     setCantidadArticulossss(0);
//   }, [saveCartToStorage, setCantidadArticulossss]);

//   const getProductQuantity = useCallback(
//     (productId: string): number => {
//       const productIdNum = parseInt(productId, 10);
//       const cartItem = localCart.find((item) => item.id === productIdNum);
//       return cartItem?.cantidad || 0;
//     },
//     [localCart]
//   );

//   const isInCart = useCallback(
//     (productId: string): boolean => {
//       const productIdNum = parseInt(productId, 10);
//       return localCart.some((item) => item.id === productIdNum);
//     },
//     [localCart]
//   );

//   const cartStats = useMemo(() => {
//     const totalItems = localCart.reduce((acc, item) => acc + item.cantidad, 0);
//     const totalPrice = localCart.reduce(
//       (acc, item) => acc + item.precio * item.cantidad,
//       0
//     );
//     const uniqueItems = localCart.length;

//     return {
//       totalItems,
//       totalPrice,
//       uniqueItems,
//       isEmpty: totalItems === 0,
//     };
//   }, [localCart]);

//   return {
//     cart: localCart,
//     isCartLoading,
//     cartItemsCount: cartStats.totalItems,
//     cartTotalPrice: cartStats.totalPrice,
//     uniqueItemsCount: cartStats.uniqueItems,
//     isCartEmpty: cartStats.isEmpty,

//     addToCart,
//     removeFromCart,
//     updateProductQuantity,
//     clearCart,

//     getProductQuantity,
//     isInCart,

//     cartStats,
//   };
// };
import { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "sonner"; // ✅ Importar sonner
import storeZustand from "../../Components/zustand";
import { Product, CartProduct } from "../../infrastructure/types/product.types";

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

  const saveCartToStorage = useCallback((newCart: CartProduct[]): void => {
    try {
      localStorage.setItem("carritoDoraemon", JSON.stringify(newCart));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
      // ✅ Toast de error al guardar
      toast.error("Error al guardar el carrito", {
        description:
          "No se pudo actualizar el carrito en el almacenamiento local",
      });
    }
  }, []);

  const addToCart = useCallback(
    (productId: string): void => {
      const productIdNum = parseInt(productId, 10);
      const selectedProduct = products.find(
        (product) => product.id === productIdNum
      );

      if (!selectedProduct) {
        console.error("Product not found:", productId);
        // ✅ Toast de error si no se encuentra el producto
        toast.error("Producto no encontrado", {
          description: "No se pudo agregar el producto al carrito",
        });
        return;
      }

      // ✅ Verificar stock disponible
      const currentQuantity =
        localCart.find((item) => item.id === productIdNum)?.cantidad || 0;
      if (currentQuantity >= selectedProduct.stock) {
        toast.warning("Stock insuficiente", {
          description: `Solo hay ${selectedProduct.stock} unidades disponibles`,
        });
        return;
      }

      setLocalCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex(
          (item) => item.id === productIdNum
        );
        let updatedCart: CartProduct[];

        if (existingProductIndex >= 0) {
          updatedCart = prevCart.map((item) =>
            item.id === productIdNum
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
          );
        } else {
          const newCartProduct: CartProduct = {
            ...selectedProduct,
            cantidad: 1,
            addedAt: new Date().toISOString(),
          };
          updatedCart = [...prevCart, newCartProduct];
        }

        saveCartToStorage(updatedCart);

        const totalQuantity = updatedCart.reduce(
          (acc, item) => acc + item.cantidad,
          0
        );
        setCantidadArticulossss(totalQuantity);

        // ✅ Toast de éxito con info del producto
        toast.success("Producto agregado al carrito", {
          description: `${
            selectedProduct.texto
          } - €${selectedProduct.precio.toFixed(2)}`,
          duration: 2500,
        });

        return updatedCart;
      });
    },
    [products, saveCartToStorage, setCantidadArticulossss, localCart]
  );

  const removeFromCart = useCallback(
    (productId: string): void => {
      const productIdNum = parseInt(productId, 10);
      const productToRemove = localCart.find(
        (item) => item.id === productIdNum
      );

      setLocalCart((prevCart) => {
        const updatedCart = prevCart.filter((item) => item.id !== productIdNum);

        saveCartToStorage(updatedCart);

        const totalQuantity = updatedCart.reduce(
          (acc, item) => acc + item.cantidad,
          0
        );
        setCantidadArticulossss(totalQuantity);

        // ✅ Toast al eliminar producto
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

  const updateProductQuantity = useCallback(
    (productId: string, newQuantity: number): void => {
      const productIdNum = parseInt(productId, 10);

      if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
      }

      // ✅ Verificar stock antes de actualizar
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

    // ✅ Toast al limpiar carrito
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
