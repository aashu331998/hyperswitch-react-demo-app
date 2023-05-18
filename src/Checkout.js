import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import BestBuyCheckout from "./components/BestBuyCheckout";
import CheckoutWrapper from "./components/CheckoutWrapper";

const Checkout = () => {
  const hyperPromise = loadStripe(
    "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
  );
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
          <Elements options={{ clientSecret }} stripe={hyperPromise}>
            <CheckoutForm
              return_url={`${window.location.origin}/completion`}
              background={"#13151B"}
            />
          </Elements>
        )}
      </>
    </CheckoutWrapper>
  );
};

export default Checkout;
