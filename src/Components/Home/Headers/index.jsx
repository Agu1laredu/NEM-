import "./header.css";
import Logo from "./assets/BRIKET.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">

      <div className="header__Logo">
        <Link to={"/"}>
          <img
            className="header__Logo--Img"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="header__Menu">

        <Link className="header__Menu--Link" to={"/"}>INICIO</Link>
        <Link className="header__Menu--Link" to={"/Nosotros"}>NOSOTROS</Link>
        <Link className="header__Menu--Link" to={"/Servicios"}>SERVICIOS</Link>
        <Link className="header__Menu--Link" to={"/"}>PORTFOLIO</Link>
        <Link className="header__Menu--Link" to={"/"}>CONTACTO</Link>

      </div>
    </div>
  );
}

export default Header;
