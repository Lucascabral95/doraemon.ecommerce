import { loadStripe } from "@stripe/stripe-js";

const stripeClavePublicable = import.meta.env.VITE_STRIPE_CLAVE_PUBLICABLE;

export const stripePromise = loadStripe(stripeClavePublicable);
