import React from "react";
import "./equipo.css";
import Eduardo from "../assets/foto.jpg";
import Malena from "../assets/imagen.jpg";

function Equipo() {
  return (
    <div className="Equipo">
      <h2>EQUIPO</h2>
      <p>
        «El talento gana partidos, pero el trabajo en equipo gana campeonatos».
      </p>
      <div className="divEquipo">
        <img src={Eduardo} alt="" className="foto" />
        <img src={Malena} alt="" className="foto" />
      </div>
    </div>
  );
}

export default Equipo;
