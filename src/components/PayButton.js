const PayButton = ({ disabled, isProcessing, id }) => {
  return (
    <button disabled={disabled} id={id}>
      <span id="button-text">
        {isProcessing ? "Processing ... " : "Pay now"}
      </span>
    </button>
  );
};

export default PayButton;
