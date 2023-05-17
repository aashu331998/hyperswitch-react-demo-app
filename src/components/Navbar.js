import logo from "../utils/icons/bestby.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <a className="img" href="/">
        <img src={logo} alt="" width="100" />
      </a>
      <a className="earlyAccess" href="https://www.bestbuy.com/">
        Return To Cart
      </a>
    </div>
  );
}

export default Navbar;
