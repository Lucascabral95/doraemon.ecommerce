import { getAuth } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "../../Components/Firebase-config";

interface UseWishListFirestore {
  removeFromWishlistFirestore: (productId: number) => Promise<void>;
  addToWishlistFirestore: (product: any) => Promise<void>;
}

interface Props {
  wishList: any;
}

export const useWishListFirestore = ({
  wishList,
}: Props): UseWishListFirestore => {
  const user = getAuth().currentUser;

  const removeFromWishlistFirestore = async (wishList: any) => {
    if (!user) {
      console.log("No hay usuario autenticado");
      return;
    }

    const docRef = doc(db, "listaDeDeseados", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return;
    }

    const currentWishlist = docSnap.data().listaDeDeseados || [];

    const nuevaListaFirestore = currentWishlist.filter(
      (p: any) => p.id !== wishList.id
    );

    await setDoc(
      docRef,
      {
        listaDeDeseados: nuevaListaFirestore,
      },
      { merge: true }
    );
  };

  const addToWishlistFirestore = async (product: any) => {
    if (!user) {
      console.error("No hay usuario autenticado");
      return;
    }

    const docRef = doc(db, "listaDeDeseados", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, { listaDeDeseados: [product] });
    } else {
      const wishlist = docSnap.data().listaDeDeseados;
      const updatedWishlist = [...wishlist, product];
      await setDoc(
        docRef,
        { listaDeDeseados: updatedWishlist },
        { merge: true }
      );
    }
  };

  return {
    removeFromWishlistFirestore,
    addToWishlistFirestore,
  };
};
