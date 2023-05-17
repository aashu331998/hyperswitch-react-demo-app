import React, { useState, useEffect } from "react";
import { loadHyper } from "@juspay-tech/hyper-js";
import { HyperElements } from "@juspay-tech/react-hyper-js";
import CheckoutForm from "./CheckoutForm";
import BestBuyCheckout from "./components/BestBuyCheckout";
import CheckoutWrapper from "./components/CheckoutWrapper";

const Checkout = () => {
  const hyperPromise = loadHyper("pk_snd_1e5425f5dea94ee793cf34ea326294d8");
  const [clientSecret, setClientSecret] = useState("");

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
    <CheckoutWrapper>
      {/* <BestBuyCheckout /> */}
      <>
        {clientSecret && (
          <HyperElements options={{ clientSecret }} hyper={hyperPromise}>
            <CheckoutForm return_url={`${window.location.origin}/completion`} />
          </HyperElements>
        )}
      </>
    </CheckoutWrapper>
  );
};

export default Checkout;
