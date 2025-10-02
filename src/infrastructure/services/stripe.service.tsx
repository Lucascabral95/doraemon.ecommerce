const API_URL = import.meta.env.VITE_API_URL;

export const createPaymentIntent = async (amount: number): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/stripe/create-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: Math.round(amount * 100),
        currency: "usd",
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Error response:", errorData);
      throw new Error(errorData.message || "Error al crear Payment Intent");
    }

    const data = await response.json();
    return data.clientSecret;
  } catch (error) {
    console.error("Error completo:", error);
    throw error;
  }
};
