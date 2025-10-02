import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Components/Firebase-config";

export interface CreateOrderData {
  userId: string;
  email: string;
  direccionEnvio: {
    nombre: string;
    apellido: string;
    empresa?: string;
    direccion: string;
    codigoPostal: string;
    ciudad: string;
    pais: string;
    provincia: string;
    telefono: string;
  };
  carrito: any[];
  comentario: string;
  cantidadArticulos: number;
  total: number;
  paymentIntentId: string;
}

export const createOrder = async (orderData: CreateOrderData) => {
  try {
    const ordersRef = collection(db, "ordenes");

    const contenido = {
      userId: orderData.userId,
      direccionEnvio: orderData.direccionEnvio,
      datosPersonales: {
        email: orderData.email,
        uid: orderData.userId,
      },
      carrito: orderData.carrito,
      fecha: new Date().toISOString(),
      comentarioDeLaOrden: orderData.comentario || "Sin comentarios",
      cantidadDeArticulos: orderData.cantidadArticulos,
      totalDeLaCompra: orderData.total.toFixed(2),
      estado: "pagado",
      paymentIntentId: orderData.paymentIntentId,
    };

    const docRef = await addDoc(ordersRef, contenido);
    console.log("Orden creada con ID:", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error al crear la orden:", error);
    throw error;
  }
};
