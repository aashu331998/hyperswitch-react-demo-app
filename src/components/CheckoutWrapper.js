import Cart from "./CartItems";

const CartContainer = ({ children }) => {
  return (
    <div class="root-common root-payment-div">
      <div class="root-common root-cart-div">
        <Cart />
      </div>
      <div class="root-common root-sdk-div">
        <div style={{ width: 180 }}></div>
        {children}
      </div>
    </div>
  );
};

export default CartContainer;
