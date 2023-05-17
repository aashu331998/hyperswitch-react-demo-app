import { useEffect, useState } from "react";

import { HyperElements } from "@juspay-tech/react-hyper-js";
import { loadHyper } from "@juspay-tech/hyper-js";
import CheckoutForm from "./CheckoutForm";
import CartContainer from "./components/CartContainer";

const Payment = () => {
  const hyperPromise = loadHyper("pk_snd_1e5425f5dea94ee793cf34ea326294d8");
  const [clientSecret, setClientSecret] = useState("");

  //create payment-intent get clientSecret

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }], country: "US" }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <CartContainer>
      {clientSecret && (
        <HyperElements options={{ clientSecret }} hyper={hyperPromise}>
          <CheckoutForm />
        </HyperElements>
      )}
    </CartContainer>
  );
};

export default Payment;
