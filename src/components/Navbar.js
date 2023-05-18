import logo from "../utils/icons/logo.svg";
import cart from "../utils/icons/Vector.svg";
import search from "../utils/icons/Vector-1.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <a className="img" href="/">
        <img src={logo} alt="" width="150" />
      </a>
      <a>
        <a className="img" href="/" style={{ marginRight: 20 }}>
          <img src={search} alt="" width="30" />
        </a>
        <a className="img" href="/">
          <img src={cart} alt="" width="30" />
        </a>
      </a>
    </div>
  );
}

export default Navbar;
