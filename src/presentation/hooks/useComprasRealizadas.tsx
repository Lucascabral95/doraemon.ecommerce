import { useState, useEffect, useCallback } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import storeZustand from "../../Components/zustand";
import { db } from "../../Components/Firebase-config";

export interface CompraRealizada {
  id: string;
  fecha: string | Date;
  datosPersonales: {
    nombre: string;
    apellido: string;
    email: string;
    telefono?: string;
  };
  cantidadDeArticulos: number;
  totalDeLaCompra: string | number;
  carrito: any[];
  direccionEnvio: any;
  comentarioDeLaOrden?: string;
}

export const useComprasRealizadas = () => {
  const { compras, setCompras } = storeZustand();
  const [emailDeSesion, setEmailDeSesion] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hasFinishedLoading, setHasFinishedLoading] = useState<boolean>(false);

  const obtenerDatos = useCallback(
    async (email: string) => {
      try {
        setIsLoading(true);
        setError(null);
        setHasFinishedLoading(false);

        const q = query(
          collection(db, "ordenes"),
          where("datosPersonales.email", "==", email)
        );

        const querySnapshot = await getDocs(q);
        const dataArr: CompraRealizada[] = [];

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          dataArr.push({
            id: doc.id,
            ...data,
          } as CompraRealizada);
        });

        console.log("📦 Pedidos encontrados:", dataArr);
        setCompras(dataArr);

        setHasFinishedLoading(true);
        setIsLoading(false);
      } catch (err) {
        console.error("❌ Error al obtener pedidos:", err);
        setError("Error al cargar tus pedidos. Por favor, intenta de nuevo.");
        setCompras([]);
        setHasFinishedLoading(true);
        setIsLoading(false);
      }
    },
    [setCompras]
  );

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user && user.email) {
        setEmailDeSesion(user.email);
        console.log("✅ Usuario autenticado:", user.email);
        obtenerDatos(user.email);
      } else {
        console.log("❌ Usuario no autenticado");
        setEmailDeSesion("");
        setCompras([]);
        setHasFinishedLoading(true);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [obtenerDatos, setCompras]);

  const formatearFecha = useCallback((fecha: string | Date) => {
    if (!fecha) return "Fecha no disponible";

    try {
      if (typeof fecha === "string") {
        return new Date(fecha).toLocaleString("es-ES", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        });
      }
      return fecha.toLocaleString();
    } catch (err) {
      console.warn("Error al formatear fecha:", fecha);
      return String(fecha);
    }
  }, []);

  const getEstadoPedido = useCallback((compra: CompraRealizada) => {
    return "Realizado";
  }, []);

  const recargarDatos = useCallback(() => {
    if (emailDeSesion) {
      obtenerDatos(emailDeSesion);
    }
  }, [emailDeSesion, obtenerDatos]);

  return {
    compras,
    emailDeSesion,
    isLoading,
    error,
    formatearFecha,
    getEstadoPedido,
    recargarDatos,
    tieneCompras: compras.length > 0,
    cantidadCompras: compras.length,
    hasFinishedLoading,
  };
};
