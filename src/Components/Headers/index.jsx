import "./Header.css";
import Logo from "./assets/BRIKET.png";

function Header() {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={Logo} alt="Logo" style={{ height: '200px', width: '200px'}} />
      </div>
      <div className="menu">
        <li>INICIO</li>
        <li>NOSOTROS</li>
        <li>SERVICIOS</li>
        <li>PORTFOLIO</li>
        <li>CONTACTO</li>
      </div>
    </div>
  );
}

export default Header;
