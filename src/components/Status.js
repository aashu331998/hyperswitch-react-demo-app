function Status(props) {
  let url = new URL(window.location.href);
  const paramValue =
    url.searchParams.get("status") || url.searchParams.get("redirect_status");
  let message =
    paramValue.toLowerCase() == "succeeded" ||
    paramValue.toLowerCase() == "pending"
      ? "Payment successful, Thank you! ✅"
      : `Payment Failed, Please try again! ❌`;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80%",
      }}
    >
      <h1>{message}</h1>
    </div>
  );
}

export default Status;
