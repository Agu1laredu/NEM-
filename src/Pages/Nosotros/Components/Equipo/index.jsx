import React from "react";
import "./equipo.css";
import Eduardo from "../assets/foto.jpg";
import Malena from "../assets/imagen.jpg";

function Equipo() {
  return (
    <div className="Equipo">
      <h2>EQUIPO</h2>
      <p>«El talento gana partidos, pero el trabajo en equipo gana campeonatos».</p>
      <div style={{ display: "flex" , justifyContent: 'center'}}>
        <img src={Eduardo} alt="" className="foto"  style={{height: '300px' , width: '300px', margin: '30px'}}/>
        <img src={Malena} alt="" className="foto" style={{height: '300px' , width: '300px', margin: '30px'}}/>
      </div>
    </div>
  );
}

export default Equipo;
