import image1 from "../utils/icons/mac.jpg";
import image2 from "../utils/icons/buds.jpeg";
function Cart() {
  return (
    <div style={{ width: 80 + "%", maxWidth: 900 }}>
      <div className="Item">
        <div className="ItemContainer">
          <div className="itemImg">
            <img style={{ height: 100 + "%" }} src={image1} />
          </div>
          <div className="itemDetails">
            <div className="name">Apple MacBook</div>
            <div className="props">
              Qty:
              <span className="value">1 </span>
            </div>
          </div>
        </div>
        <div> $1,049.00</div>
      </div>
      <div className="Item">
        <div className="ItemContainer">
          <div className="itemImg">
            <img style={{ height: 100 + "%" }} src={image2} />
          </div>
          <div className="itemDetails">
            <div className="name">Apple Airpods</div>
            <div className="props">
              Qty:
              <span className="value">1 </span>
            </div>
          </div>
        </div>
        <div> $199.00</div>
      </div>
      <div className="ItemTotal">
        <div className="total">Total Amount</div>
        <div> $1,248.00</div>
      </div>
      <div
        style={{
          backgroundColor: "hsla(0,0%,73%,.08)",
          padding: 50,
          borderRadius: 8,
          marginTop: 40,
          fontWeight: 200,
          color: "#00000080",
        }}
      >
        This is a sample transaction that uses test credentials and does not
        involve real money.
      </div>
    </div>
  );
}

export default Cart;
