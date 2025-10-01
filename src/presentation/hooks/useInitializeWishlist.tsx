import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";
import storeZustand from "../../Components/zustand";

export const useInitializeWishlist = () => {
  const { setWishList } = storeZustand();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setWishList([]);
        return;
      }

      const docRef = doc(db, "listaDeDeseados", user.uid);

      const unsubscribeSnapshot = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const firestoreWishlist = docSnap.data().listaDeDeseados || [];
            setWishList(firestoreWishlist);
          } else {
            setWishList([]);
          }
        },
        (error) => {
          console.error("❌ Error en listener:", error);
        }
      );

      return () => {
        unsubscribeSnapshot();
      };
    });

    return () => {
      unsubscribeAuth();
    };
  }, [setWishList]);
};
