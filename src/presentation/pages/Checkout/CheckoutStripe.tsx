import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";

import { createPaymentIntent } from "../../../infrastructure/services/stripe.service";
import { stripePromise } from "../../../infrastructure/config/stripe.config";
import PaymentForm from "../../components/Stripe/PaymentForm";
import "./CheckoutStripe.scss";

const CheckoutStripe = () => {
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const totalAmount = location.state?.totalAmount || 0;

  useEffect(() => {
    if (totalAmount <= 0) {
      navigate("/checkout/fin");
      return;
    }

    const initPayment = async () => {
      try {
        const secret = await createPaymentIntent(totalAmount);
        setClientSecret(secret);
      } catch (error) {
        console.error("Error al inicializar el pago:", error);
        setError("No se pudo inicializar el pago. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    initPayment();
  }, [totalAmount, navigate]);

  const appearance = {
    theme: "stripe" as const,
    variables: {
      colorPrimary: "#0570de",
      colorBackground: "#ffffff",
      colorText: "#30313d",
      colorDanger: "#df1b41",
      fontFamily: "system-ui, sans-serif",
      spacingUnit: "4px",
      borderRadius: "8px",
    },
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Cargando checkout...</h2>
      </div>
    );
  }

  if (error || !clientSecret) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Error</h2>
        <p>{error || "No se pudo cargar el checkout"}</p>
        <button onClick={() => navigate("/checkout/fin")}>
          Volver al checkout
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Finalizar Compra</h1>
      <p>Total a pagar: ${totalAmount.toFixed(2)}</p>

      <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
        <PaymentForm />
      </Elements>
    </div>
  );
};

export default CheckoutStripe;
