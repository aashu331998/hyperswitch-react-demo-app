import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckoutWrapper from "./components/CheckoutWrapper";

const Checkout = ({ publishableKey, appearance, options, return_url }) => {
  const stripePromise = loadStripe(publishableKey);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "4667" }], country: "US" }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  return (
    <CheckoutWrapper>
      <>
        {clientSecret && (
          <Elements
            options={{
              clientSecret,
              appearance: appearance || {},
            }}
            stripe={stripePromise}
          >
            <CheckoutForm
              return_url={return_url}
              background={"#13151B"}
              options={options || {}}
            />
          </Elements>
        )}
      </>
    </CheckoutWrapper>
  );
};

export default Checkout;
