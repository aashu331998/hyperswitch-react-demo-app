import shirt from "../utils/icons/shirt.png";
import cap from "../utils/icons/cap.png";
function Cart() {
  return (
    <div style={{ width: 80 + "%", maxWidth: 900 }}>
      <div className="Item">
        <div className="ItemContainer">
          <div className="itemImg">
            <img src={shirt} />
          </div>
          <div className="itemDetails">
            <div className="name">HS Tshirt</div>
            <div className="props">
              Size: <span className="value">37 &nbsp;&nbsp;&nbsp;</span>Qty:
              <span className="value">1 </span>
            </div>
            <div className="props">
              Color: <span className="value">Black</span>
            </div>
          </div>
        </div>
        <div> 100.00</div>
      </div>
      <div className="Item">
        <div className="ItemContainer">
          <div className="itemImg">
            <img src={cap} />
          </div>
          <div className="itemDetails">
            <div className="name">HS Cap</div>
            <div className="props">
              Size: <span className="value">2 &nbsp;&nbsp;&nbsp;</span>Qty:
              <span className="value">1 </span>
            </div>
            <div className="props">
              Color: <span className="value">Black</span>
            </div>
          </div>
        </div>
        <div> 100.00</div>
      </div>
      <div className="ItemTotal">
        <div className="total">Total Amount</div>
        <div> 200.00</div>
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
