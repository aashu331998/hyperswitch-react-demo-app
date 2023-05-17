import logo from "../utils/icons/Framehyperswitch.svg";

function Navbar() {
  return (
    <div className="Navbar">
      <a className="img" href="/">
        <img src={logo} alt="" width="200" />
      </a>
      <div className="MenuItems">
        <a className="Menulink" href="https://hyperswitch.io/">
          Product
        </a>
        <a className="Menulink" href="https://hyperswitch.io/docs">
          Developer Hub
        </a>
      </div>
      <div className="GetEarlyAccess">
        <a className="earlyAccess" href="https://app.hyperswitch.io/">
          Sign Up for Hyperswitch
        </a>
      </div>
    </div>
  );
}

export default Navbar;
