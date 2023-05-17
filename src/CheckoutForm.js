import { UnifiedCheckout } from "@juspay-tech/react-hyper-js";
import { useState } from "react";
import { useHyper, useElements } from "@juspay-tech/react-hyper-js";
import PayButton from "./components/PayButton";

const CheckoutForm = () => {
  const hyper = useHyper();
  const widgets = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let unifiedCheckoutOptions = {};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hyper || !widgets) {
      // hyper-js has not yet loaded.
      // Make sure to disable form submission until hyper-js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await hyper.confirmPayment({
      widgets,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}/completion`,
      },
    });

    // This point will only be reached if there is an immediate error occurring while confirming the payment. Otherwise, your customer will be redirected to your `return_url`

    // For some payment flows such as Sofort, iDEAL, your customer will be redirected to an intermediate page to complete authorization of the payment, and then redirected to the `return_url`.

    if (error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <UnifiedCheckout id="unified-checkout" options={unifiedCheckoutOptions} />
      <PayButton
        disabled={isLoading || !hyper || !widgets}
        isProcessing={isLoading}
        id="submit"
      />
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
};

export default CheckoutForm;
