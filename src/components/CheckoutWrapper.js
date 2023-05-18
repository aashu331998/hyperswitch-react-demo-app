import Cart from "./CartItems";

const CartContainer = ({ children }) => {
  return (
    <div className="root-common root-payment-div">
      <div className="root-common root-cart-div">
        <Cart />
      </div>
      <div className="root-common root-sdk-div">
        <div style={{ width: 100 }}></div>
        {children}
      </div>
    </div>
  );
};

export default CartContainer;
