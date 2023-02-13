import React from "react";
import Header from "./Components/Headers/index.jsx";
import Fondo from "./Components/assets/th.jpg";
import BannerInfo from "./Components/Description/index.jsx";
import Equipo from "./Components/Equipo/index.jsx";
import Servicios from "./Components/Servicios/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function Nosotros() {
  return (
    <div className="nosotros">
      <Header />
      <div
        style={{
          height: "200px",
          backgroundColor: "#0096d5",
          borderTop: "1px solid black",
        }}
      >
        <b
          style={{
            position: "relative",
            top: "60px",
            left: "300px",
            fontSize: "50px",
          }}
        >
          NOSOTROS
        </b>
      </div>
      <img src={Fondo} alt="" style={{ opacity: "0.7" }} />
      <BannerInfo />
      <Equipo />
      <Servicios />
      <Footer />
    </div>
  );
}

export default Nosotros;
