import { UnifiedCheckout } from "@juspay-tech/react-hyper-js";
import { useState } from "react";
import { useHyper, useElements } from "@juspay-tech/react-hyper-js";

const PayButton = ({ disabled, isProcessing }) => {
  return (
    <button disabled={disabled} id="submit">
      <span>{isProcessing ? "Processing ... " : "Pay now"}</span>
    </button>
  );
};
const CheckoutForm = ({ return_url }) => {
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
        return_url: return_url,
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
    <form
      style={{
        border: "#f6f9fc solid 1px",
        borderRadius: "3px",
        padding: "20px",
        margin: "20px 0",
        maxWidth: "560px",
        width: "100%",
        boxShadow: "0 30px 50px -20px rgb(50 50 93 / 25%)",
      }}
      onSubmit={handleSubmit}
    >
      <UnifiedCheckout id="unified-checkout" options={unifiedCheckoutOptions} />
      <PayButton
        disabled={isLoading || !hyper || !widgets}
        isProcessing={isLoading}
      />
      {/* Show any error or success messages */}
      {message && (
        <div
          style={{
            fontSize: "16px",
            fontWeight: 400,
            color: "#ff0000",
          }}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
