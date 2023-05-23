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
              fonts: [
                {
                  cssSrc: "https://fonts.googleapis.com/css2?family=Combo&display=swap",
                },
                {
                  cssSrc:
                    "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&display=swap",
                },
                {
                  cssSrc:
                    "https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Qwitcher+Grypen:wght@400;700&display=swap",
                },
                {
                  family: "something",
                  src: "https://fonts.gstatic.com/s/combo/v21/BXRlvF3Jh_fIhj0lDO5Q82f1.woff2",
                  weight: "700",
                },
              ]
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
