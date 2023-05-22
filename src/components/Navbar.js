import logo from "../utils/icons/logo.svg";
import cart from "../utils/icons/Vector.svg";
import search from "../utils/icons/Vector-1.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="img" href="/">
        <a href={`${window.location.origin}`}>
          <img src={logo} alt="" width="150" />
        </a>
      </div>
      <div style={{ display: "flex" }}>
        <div className="img" href="/" style={{ marginRight: 20 }}>
          <img src={search} alt="" width="30" />
        </div>
        <div className="img" href="/">
          <img src={cart} alt="" width="30" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
