import "./Header.css";
import Logo from "./assets/BRIKET.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "200px", width: "200px", cursor: "pointer" }}
          />
        </Link>
      </div>
      <div className="menu">
        <li>
          <Link to={"/"}>INICIO</Link>
        </li>
        <li>
          <Link to={"/Nosotros"}>NOSOTROS</Link>
        </li>
        <li>SERVICIOS</li>
        <li>PORTFOLIO</li>
        <li>CONTACTO</li>
      </div>
    </div>
  );
}

export default Header;
