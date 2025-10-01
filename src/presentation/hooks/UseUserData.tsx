import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

import storeZustand from "../../Components/zustand";
import { db } from "../../Components/Firebase-config";

export const UseUserData = () => {
  const {
    setAcceso,
    setMiDireccionCompleta,
    setEmailDeInicioDeSesion,
    setDatosPersonaless,
  } = storeZustand();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAcceso(false);
        setMiDireccionCompleta([]);
        return;
      }

      setAcceso(true);
      setEmailDeInicioDeSesion(user.email);

      const docRef = doc(db, "direccionesDeClientes", user.uid);
      const docRefDatosPersonales = doc(db, "datosPersonales", user.uid);

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

      const unsubscribeSnapshotDatosPersonales = onSnapshot(
        docRefDatosPersonales,
        (docSnap) => {
          if (docSnap.exists()) {
            const datosPersonales = docSnap.data() || [];
            setDatosPersonaless(datosPersonales);
          } else {
            setDatosPersonaless([]);
          }
        },
        (error) => {
          console.error("❌ Error en listener de datos personales:", error);
        }
      );

      return () => {
        unsubscribeSnapshot();
        unsubscribeSnapshotDatosPersonales();
      };
    });

    return () => {
      unsubscribeAuth();
    };
  }, [
    setAcceso,
    setMiDireccionCompleta,
    setEmailDeInicioDeSesion,
    setDatosPersonaless,
  ]);
};
