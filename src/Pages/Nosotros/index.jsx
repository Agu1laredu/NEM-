import React from "react";
import Header from "../../Components/Headers/index.jsx";
import Fondo from "./Components/assets/th.jpg";
import BannerInfo from "./Components/Description/index.jsx";
import Equipo from "./Components/Equipo/index.jsx";
import Servicios from "./Components/Servicios/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import "./nosotros.css";

function Nosotros() {
  return (
    <div className="nosotros">
      <Header />
      <div className="divNosotros">
        <b className="BNosotros">NOSOTROS</b>
      </div>
      <img id="nosotrosImg" src={Fondo} alt="" />
      <BannerInfo />
      <Equipo />
      <Servicios />
      <Footer />
    </div>
  );
}

export default Nosotros;
