// import { useEffect } from "react";
// import storeZustand from "../../Components/zustand";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../Components/Firebase-config";

// export const UseUserData = () => {
//   const { setAcceso, setMiDireccionCompleta } = storeZustand();

//   useEffect(() => {
//     const auth = getAuth();

//     const obtenerMiDireccion = async (userId: string) => {
//       try {
//         const docRef = doc(db, "direccionesDeClientes", userId);
//         const docSnap = await getDoc(docRef);

//         let direcciones: any[] = [];
//         if (docSnap.exists()) {
//           direcciones = docSnap.data().direcciones || [];
//         }

//         console.log("direcciones", direcciones);
//         setMiDireccionCompleta(direcciones);
//       } catch (error) {
//         console.error("Error obteniendo direcciones:", error);
//       }
//     };

//     const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         setAcceso(true);
//         await obtenerMiDireccion(user.uid);
//       } else {
//         setAcceso(false);
//         setMiDireccionCompleta([]);
//       }
//     });

//     return () => {
//       unsubscribeAuth();
//     };
//   }, [setAcceso, setMiDireccionCompleta]);
// };
import { useEffect } from "react";
import storeZustand from "../../Components/zustand";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

export const UseUserData = () => {
  const { setAcceso, setMiDireccionCompleta } = storeZustand();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAcceso(false);
        setMiDireccionCompleta([]);
        return;
      }

      setAcceso(true);

      const docRef = doc(db, "direccionesDeClientes", user.uid);

      const unsubscribeSnapshot = onSnapshot(
        docRef,
        (docSnap) => {
          if (docSnap.exists()) {
            const direcciones = docSnap.data().direcciones || [];
            setMiDireccionCompleta(direcciones);
          } else {
            setMiDireccionCompleta([]);
          }
        },
        (error) => {
          console.error("❌ Error en listener de direcciones:", error);
        }
      );

      return () => {
        unsubscribeSnapshot();
      };
    });

    return () => {
      unsubscribeAuth();
    };
  }, [setAcceso, setMiDireccionCompleta]);
};
