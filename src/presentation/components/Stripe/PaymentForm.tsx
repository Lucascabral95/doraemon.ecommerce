import { useState, FormEvent } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";

const styleDiv: React.CSSProperties = {
  color: "white",
  backgroundColor: "#dc3545",
  padding: "10px",
  borderRadius: "4px",
  marginTop: "10px",
};

const styleButton = (stripe: Stripe | null, isProcessing: boolean) => {
  return {
    width: "100%",
    padding: "12px",
    marginTop: "20px",
    backgroundColor: isProcessing || !stripe ? "#ccc" : "#5469d4",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: isProcessing || !stripe ? "not-allowed" : "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  };
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");

    const returnUrl = `${window.location.origin}/payment-success`;

    try {
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (result.error) {
        setErrorMessage(result.error.message || "Error al procesar el pago");
        setIsProcessing(false);
      }
    } catch (err) {
      console.error("Error completo:", err);
      setErrorMessage("Error inesperado al procesar el pago");
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <PaymentElement />

      {errorMessage && <div style={styleDiv}>{errorMessage}</div>}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        style={styleButton(stripe, isProcessing)}
      >
        {isProcessing ? "Procesando..." : "Pagar"}
      </button>
    </form>
  );
};

export default PaymentForm;
