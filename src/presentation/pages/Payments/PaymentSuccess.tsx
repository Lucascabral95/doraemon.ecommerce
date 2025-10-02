import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";

import { db } from "../../../infrastructure/config/firebase.config";
import { useCart } from "../../hooks/useCart";
import "./PaymentSuccess.scss";

const PaymentSuccessPage = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [status, setStatus] = useState<string>("loading");
  const [orderId, setOrderId] = useState<string>("");

  useEffect(() => {
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      console.error("❌ Acceso directo sin payment intent");
      navigate("/");
      return;
    }

    if (!stripe) {
      return;
    }

    const processPayment = async () => {
      try {
        const { paymentIntent } = await stripe.retrievePaymentIntent(
          clientSecret
        );

        if (paymentIntent?.status !== "succeeded") {
          setStatus(
            paymentIntent?.status === "processing" ? "processing" : "error"
          );
          return;
        }

        const savedDataStr = localStorage.getItem("pendingOrderData");

        if (!savedDataStr) {
          console.error("❌ No hay datos de orden");
          Swal.fire({
            icon: "warning",
            title: "Orden procesada",
            text:
              "Tu pago fue exitoso pero hubo un problema al guardar la orden. Por favor contacta con soporte con este ID de pago: " +
              paymentIntent.id,
            confirmButtonText: "OK",
          });
          setStatus("error");
          return;
        }

        const savedData = JSON.parse(savedDataStr);

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user || user.uid !== savedData.userId) {
          console.error("❌ Usuario no autenticado o no coincide");
          Swal.fire({
            icon: "error",
            title: "Error de autenticación",
            text: "Por favor inicia sesión y contacta con soporte.",
            confirmButtonText: "OK",
          });
          navigate("/login");
          return;
        }

        const ordersRef = collection(db, "ordenes");

        const contenido = {
          userId: savedData.userId,
          direccionEnvio: savedData.direccionEnvio,
          datosPersonales: {
            email: savedData.email,
            uid: savedData.userId,
          },
          carrito: savedData.carrito,
          fecha: new Date().toISOString(),
          comentarioDeLaOrden: savedData.comentario,
          cantidadDeArticulos: savedData.cantidadArticulos,
          totalDeLaCompra: savedData.total.toFixed(2),
          estado: "pagado",
          paymentIntentId: paymentIntent.id,
        };

        const docRef = await addDoc(ordersRef, contenido);
        console.log("✅ Orden creada:", docRef.id);

        await clearCart();
        localStorage.removeItem("pendingOrderData");

        setOrderId(docRef.id);
        setStatus("succeeded");

        setTimeout(() => {
          navigate(`/detalle/compra/${docRef.id}`);
        }, 2000);
      } catch (error) {
        console.error("❌ Error:", error);
        setStatus("error");

        Swal.fire({
          icon: "error",
          title: "Error al procesar",
          text: "Hubo un problema. Por favor contacta con soporte.",
          confirmButtonText: "OK",
        });
      }
    };

    processPayment();
  }, [stripe, clearCart, navigate]);

  if (status === "loading") {
    return (
      <div className="payment-success-container">
        <div className="card">
          <div className="spinner"></div>
          <h1>Verificando pago</h1>
          <p className="redirect-message">Por favor espera un momento...</p>
        </div>
      </div>
    );
  }

  if (status === "processing") {
    return (
      <div className="payment-success-container">
        <div className="card">
          <div className="flex justify-center mb-6">
            <FaSpinner className="animate-spin h-12 w-12 text-indigo-600" />
          </div>
          <h1>Procesando Pago</h1>
          <p className="text-gray-600 mt-2">Tu pago está siendo procesado</p>
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="payment-success-container">
        <div className="error-container">
          <div className="error-icon">
            <FaExclamationTriangle />
          </div>
          <h1>Error en el pago</h1>
          <p className="text-gray-600 mt-2">
            Hubo un problema al procesar tu pago. Por favor inténtalo de nuevo.
          </p>
          <button
            onClick={() => navigate("/checkout/fin")}
            className="back-button"
          >
            Volver al checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-success-container">
      <div className="card">
        <div className="success-icon">
          <FaCheckCircle />
        </div>
        <h1>¡Compra Exitosa!</h1>
        <p className="order-id">
          Número de orden: <strong>{orderId}</strong>
        </p>
        <p className="redirect-message">
          Serás redirigido a los detalles de tu pedido en breve...
        </p>
        <div className="flex justify-center mt-6">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
