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
<<<<<<< HEAD:src/Components/Home/Headers/index.jsx

      <div className="header__Menu">

        <Link className="header__Menu--Link" to={"/"}>INICIO</Link>
        <Link className="header__Menu--Link" to={"/Nosotros"}>NOSOTROS</Link>
        <Link className="header__Menu--Link" to={"/Servicios"}>SERVICIOS</Link>
        <Link className="header__Menu--Link" to={"/"}>PORTFOLIO</Link>
        <Link className="header__Menu--Link" to={"/"}>CONTACTO</Link>

=======
      <div className="menu">
        <li>
          <Link to={"/"}>INICIO</Link>
        </li>
        <li>
          <Link to={"/Nosotros"}>NOSOTROS</Link>
        </li>
        <li>
          <Link to={"/Servicios"}>SERVICIOS</Link>
        </li>
        <li>
          <Link to={"/Portfolio"}>PORTFOLIO</Link>
        </li>
        <li>
          <Link to={"/Contacto"}>CONTACTO</Link>
        </li>
>>>>>>> 6102555d6d9fc2d3a10f6d60a3d4f8d24dfcc613:src/Components/Headers/index.jsx
      </div>
    </div>
  );
}

export default Header;
