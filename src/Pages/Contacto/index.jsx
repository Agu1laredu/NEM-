import React from "react";
import Headers from "../../Components/Headers/index.jsx";
import Formulario from "./Components/Formulario/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import styled from "styled-components";

function Contacto() {
  const PageContact = styled.div`
    height: 20vh;
    display: flex;
    width: 100%;
    align-items: center;
    margin: auto;
    background-color: #0096d5;
    border-top: 1px solid black;
    & b {
      font-size: 50px;
      margin-left: 10%;
    }
  `
  return (
    <div className="nosotros">
      <Headers />
      <PageContact>
        <b>
          CONTACTO
        </b>
      </PageContact>
      <Formulario />
      <Footer />
    </div>
  );
}

export default Contacto;
