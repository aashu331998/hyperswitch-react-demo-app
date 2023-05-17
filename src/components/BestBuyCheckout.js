const PayButton = ({ disabled, isProcessing, id }) => {
  return (
    <button disabled={disabled} id={id}>
      <span id="button-text">
        {isProcessing ? "Processing ... " : "Pay now"}
      </span>
    </button>
  );
};

const CheckoutForm = () => {
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
    >
      <div
        style={{
          fontSize: "16px",
          width: 100 + "%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <div style={{ fontSize: "16px" }}>
          <b>Credit or Debit Card Number:</b>
        </div>
        <input
          placeholder="4242 4242 4242 4242"
          color="black"
          style={{
            marginTop: 10,
            padding: "10px",
            fontSize: "16px",
            width: 90 + "%",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <div style={{ width: "90%" }}>
            <div style={{ fontSize: "16px" }}>
              <b>Expiration Month:</b>
            </div>
            <input
              placeholder="Month"
              color="black"
              style={{
                marginTop: 10,
                padding: "10px",
                fontSize: "16px",
                width: 90 + "%",
              }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: "16px" }}>
              <b>Expiration Year:</b>
            </div>
            <input
              placeholder="Year"
              color="black"
              style={{
                marginTop: 10,
                padding: "10px",
                fontSize: "16px",
                width: 80 + "%",
              }}
            />
          </div>
        </div>
        <div style={{ fontSize: "16px", paddingTop: 20 }}>
          <b>Security Code:</b>
        </div>
        <input
          placeholder="XXX"
          color="black"
          style={{
            marginTop: 10,
            padding: "10px",
            fontSize: "16px",
            width: 90 + "%",
          }}
        />
      </div>
      <PayButton disabled={false} isProcessing={false} id="submit" />
    </form>
  );
};

export default CheckoutForm;
