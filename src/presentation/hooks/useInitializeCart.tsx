// import { useEffect } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { doc, onSnapshot } from "firebase/firestore";
// import { db } from "../../Components/Firebase-config";
// import storeZustand from "../../Components/zustand";

// export const useInitializeCart = () => {
//   const { setCart } = storeZustand();

//   useEffect(() => {
//     const auth = getAuth();

//     const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
//       if (!user) {
//         setCart([]);
//         return;
//       }

//       const docRef = doc(db, "guardarEnCarrito", user.uid);

//       const unsubscribeSnapshot = onSnapshot(
//         docRef,
//         (docSnap) => {
//           if (docSnap.exists()) {
//             const firestoreCart = docSnap.data().carrito || [];
//             setCart(firestoreCart);
//           } else {
//             setCart([]);
//           }
//         },
//         (error) => {
//           console.error("❌ Error en listener:", error);
//           setCart([]);
//         }
//       );

//       return () => {
//         unsubscribeSnapshot();
//       };
//     });

//     return () => {
//       unsubscribeAuth();
//     };
//   }, [setCart]);
// };
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

import storeZustand from "../../Components/zustand";
import { db } from "../../Components/Firebase-config";

export const useInitializeCart = () => {
  const { setCart } = storeZustand();

  useEffect(() => {
    const auth = getAuth();
    let unsubscribeSnapshot: (() => void) | null = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
        unsubscribeSnapshot = null;
      }

      if (!user) {
        setCart([]);
        return;
      }

      const docRef = doc(db, "guardarEnCarrito", user.uid);

      unsubscribeSnapshot = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const firestoreCart = docSnap.data().carrito || [];
            setCart(firestoreCart);
          } else {
            setCart([]);
          }
        },
        (error) => {
          console.error("❌ Error en listener del carrito:", error);
          setCart([]);
        }
      );
    });

    return () => {
      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
      unsubscribeAuth();
    };
  }, [setCart]);
};
