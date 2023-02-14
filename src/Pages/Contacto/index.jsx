import React from "react";
import Headers from "../../Components/Headers/index.jsx";
import Formulario from "./Components/Formulario/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

function Contacto() {
  return (
    <div className="nosotros">
      <Headers />
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
          CONTACTO
        </b>
      </div>
      <Formulario />
      <Footer />
    </div>
  );
}

export default Contacto;
