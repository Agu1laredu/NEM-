import React from "react";
import Header from "../../Components/Headers";
import Software from "./Components/Software/index.jsx";
import Agencia from "./Components/Agencia/index.jsx";
import Portfolio from "./Components/Portfolio/index.jsx";
import Form from "../../Components/Formulario/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

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
          SERVICIOS
        </b>
      </div>
      <Software />
      <Agencia />
      <Portfolio />
      <Form />
      <Footer />
    </div>
  );
}

export default Nosotros;
