import { useState, useCallback } from "react";

import Articulos from "../../Json/Articulos.json";
import { Articulo } from "../../infrastructure/Interfaces";
import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";
import storeZustand from "../../Components/zustand";
import { useWishListFirestore } from "./useWishListFirestore";

export interface CartItem extends Articulo {
  cantidad: number;
}

export const useWishlistOriginal = () => {
  const { wishList, setWishList, cart, setCart } = storeZustand();
  const [articulosSeleccionados, setArticulosSeleccionados] = useState<
    Articulo[]
  >([]);

  const { addToWishlistFirestore, removeFromWishlistFirestore } =
    useWishListFirestore({ wishList });

  const precioTotalWishList = wishList.reduce(
    (total: number, producto: Articulo) => {
      return total + (producto.precio || 0);
    },
    0
  );

  const agregarAlCarrito = useCallback(
    (id: number) => {
      const buscarProducto = (Articulos as Articulo[]).find((i) => i.id === id);

      if (!buscarProducto) {
        console.warn(`Producto con ID ${id} no encontrado en Articulos.json`);
        return false;
      }

      const cantidadEnCarrito = cart.reduce((total: number, item: CartItem) => {
        return item.id === id ? total + item.cantidad : total;
      }, 0);

      if (cantidadEnCarrito + 1 > buscarProducto.stock) {
        console.warn(
          `Stock insuficiente para producto ${buscarProducto.texto}`
        );
        return false;
      }

      const estaEnCarrito = cart.some((item: CartItem) => item.id === id);
      const carritoActualizado = estaEnCarrito
        ? cart.map((item: CartItem) =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
          )
        : [...cart, { ...buscarProducto, cantidad: 1 }];

      setCart(carritoActualizado);
      localStorage.setItem(
        "carritoDoraemon",
        JSON.stringify(carritoActualizado)
      );

      console.log(`✅ Producto ${buscarProducto.texto} agregado al carrito`);
      return true;
    },
    [cart, setCart]
  );

  // const eliminarDelWish = useCallback(
  //   (id: number) => {
  //     const productoAEliminar = wishList.find((p: Articulo) => p.id === id);

  //     if (!productoAEliminar) {
  //       console.warn(`Producto con ID ${id} no encontrado en wishlist`);
  //       return;
  //     }

  //     const index = wishList.findIndex((p: Articulo) => p.id === id);
  //     if (index !== -1) {
  //       const nuevaLista = [...wishList];
  //       nuevaLista.splice(index, 1);
  //       setWishList(nuevaLista);
  //       localStorage.setItem("WishList", JSON.stringify(nuevaLista));

  //       setArticulosSeleccionados((prev) =>
  //         prev.filter((item) => item.id !== id)
  //       );

  //       console.log(
  //         `✅ Producto ${productoAEliminar.texto} eliminado de wishlist`
  //       );
  //     }
  //   },
  //   [wishList, setWishList]
  // );
  const eliminarDelWish = useCallback(
    async (id: number) => {
      try {
        const productoAEliminar = wishList.find((p: Articulo) => p.id === id);

        if (!productoAEliminar) {
          console.warn(`Producto con ID ${id} no encontrado en wishlist`);
          return;
        }

        setArticulosSeleccionados((prev) =>
          prev.filter((item) => item.id !== id)
        );
        const nuevaListaLocalStorage = wishList.filter(
          (p: Articulo) => p.id !== id
        );
        setWishList(nuevaListaLocalStorage);
        localStorage.setItem(
          "WishList",
          JSON.stringify(nuevaListaLocalStorage)
        );

        // Eliminar producto de Firestore
        const auth = getAuth();

        if (!auth.currentUser) {
          console.log("No hay usuario autenticado");
          return;
        }

        const docRef = doc(db, "listaDeDeseados", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          return;
        }

        const currentWishlist: Articulo[] =
          docSnap.data().listaDeDeseados || [];

        const nuevaListaFirestore = currentWishlist.filter(
          (p: Articulo) => p.id !== id
        );

        await setDoc(
          docRef,
          {
            listaDeDeseados: nuevaListaFirestore,
          },
          { merge: true }
        );
      } catch (error) {
        console.error("Error eliminando producto:", error);
      }
    },
    [wishList, setWishList, setArticulosSeleccionados]
  );

  const handleCheckBox = useCallback(
    (id: number) => {
      const buscarProducto = wishList.find((p: Articulo) => p.id === id);
      if (!buscarProducto) {
        console.warn(
          `Producto con ID ${id} no encontrado en wishlist para selección`
        );
        return;
      }

      const estaSeleccionado = articulosSeleccionados.some(
        (item: Articulo) => item.id === id
      );

      if (estaSeleccionado) {
        setArticulosSeleccionados((prev) =>
          prev.filter((item) => item.id !== id)
        );
      } else {
        setArticulosSeleccionados((prev) => [...prev, buscarProducto]);
      }
    },
    [wishList, articulosSeleccionados]
  );

  const sacarDelWish = useCallback(
    async (selectedValue: string) => {
      if (articulosSeleccionados.length === 0) {
        console.warn("No hay artículos seleccionados para la acción grupal");
        return;
      }

      if (selectedValue === "eliminar") {
        const idsAEliminar = articulosSeleccionados.map(
          (item: Articulo) => item.id
        );
        const updatedWishList = wishList.filter(
          (item: Articulo) => !idsAEliminar.includes(item.id)
        );

        setWishList(updatedWishList);
        localStorage.setItem("WishList", JSON.stringify(updatedWishList));
        //
        await removeFromWishlistFirestore(updatedWishList);
        //
        setArticulosSeleccionados([]);
      } else if (selectedValue === "agregar") {
        let productosAgregados = 0;
        let productosConStockInsuficiente = 0;

        const carritoActualizado = [...cart];

        articulosSeleccionados.forEach((producto: Articulo) => {
          const cantidadEnCarrito = carritoActualizado.reduce(
            (total: number, item: CartItem) => {
              return item.id === producto.id ? total + item.cantidad : total;
            },
            0
          );

          if (cantidadEnCarrito + 1 <= producto.stock) {
            const estaEnCarrito = carritoActualizado.some(
              (item: CartItem) => item.id === producto.id
            );

            if (estaEnCarrito) {
              const index = carritoActualizado.findIndex(
                (item: CartItem) => item.id === producto.id
              );
              carritoActualizado[index].cantidad += 1;
            } else {
              carritoActualizado.push({ ...producto, cantidad: 1 });
            }
            productosAgregados++;
          } else {
            console.warn(`Stock insuficiente para ${producto.texto}`);
            productosConStockInsuficiente++;
          }
        });

        setCart(carritoActualizado);
        localStorage.setItem(
          "carritoDoraemon",
          JSON.stringify(carritoActualizado)
        );
        setArticulosSeleccionados([]);
      }
    },
    [articulosSeleccionados, wishList, cart, setWishList, setCart]
  );

  const isProductSelected = useCallback(
    (id: number) => {
      return articulosSeleccionados.some((item: Articulo) => item.id === id);
    },
    [articulosSeleccionados]
  );

  const getCategorias = useCallback(() => {
    const categorias = new Set(
      wishList.map((item: Articulo) => item.categoria)
    );
    const subcategorias = new Set(
      wishList.map((item: Articulo) => item.subcategoria)
    );

    return {
      categorias: Array.from(categorias),
      subcategorias: Array.from(subcategorias),
      totalProductos: wishList.length,
      totalSeleccionados: articulosSeleccionados.length,
    };
  }, [wishList, articulosSeleccionados]);

  // useEffect(() => {
  //   console.log("📊 Wishlist Stats:", {
  //     totalWishlist: wishList.length,
  //     totalSeleccionados: articulosSeleccionados.length,
  //     precioTotal: precioTotalWishList.toFixed(2),
  //     categorias: getCategorias(),
  //   });
  // }, [wishList, articulosSeleccionados, precioTotalWishList, getCategorias]);

  return {
    wishList,
    articulosSeleccionados,
    precioTotalWishList,

    agregarAlCarrito,
    eliminarDelWish,
    handleCheckBox,
    sacarDelWish,

    isProductSelected,
    getCategorias,
  };
};
