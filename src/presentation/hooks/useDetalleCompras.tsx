import { useCallback, useEffect, useState } from "react";
import { DetalleCompraData } from "../../infrastructure/Interfaces";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

export const useDetalleCompras = () => {
  const [compras, setCompras] = useState<DetalleCompraData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const obtenerDatos = useCallback(async (orderId: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const docRef = doc(db, "ordenes", orderId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = { id: docSnap.id, ...docSnap.data() } as DetalleCompraData;
        setCompras(data);
      } else {
        setError("No se encontró la orden solicitada");
        setCompras(null);
      }
    } catch (err) {
      setError("Error al cargar el detalle de la compra");
      setCompras(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      obtenerDatos(id);
    } else {
      setError("ID de orden no válido");
      setIsLoading(false);
    }
  }, [id, obtenerDatos]);

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

  const calcularTotalProducto = useCallback(
    (precio: number, cantidad: number) => {
      return (precio * cantidad).toFixed(2);
    },
    []
  );

  const getResumenCompra = useCallback(() => {
    if (!compras) return null;

    return {
      numeroOrden: compras.id,
      fecha: formatearFecha(compras.fecha),
      cliente: `${compras.datosPersonales?.nombre} ${compras.datosPersonales?.apellido}`,
      email: compras.datosPersonales?.email,
      totalArticulos:
        compras.cantidadDeArticulos || compras.carrito?.length || 0,
      totalCompra: compras.totalDeLaCompra,
      direccion: compras.direccionEnvio,
      comentario: compras.comentarioDeLaOrden,
    };
  }, [compras, formatearFecha]);

  const recargarDatos = useCallback(() => {
    if (id) {
      obtenerDatos(id);
    }
  }, [id, obtenerDatos]);

  return {
    compras,
    isLoading,
    error,
    formatearFecha,
    calcularTotalProducto,
    getResumenCompra,
    recargarDatos,

    tieneProductos: compras?.carrito?.length ?? 0 > 0,
    cantidadProductos: compras?.carrito?.length ?? 0,
  };
};
