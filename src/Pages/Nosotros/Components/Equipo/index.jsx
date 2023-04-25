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
      <section
        style={{
          margin: "auto",
          position: "relative",
          left: "25%",
          right: "25%",
        }}
      >
        <div>
          <h4> Estimado/a cliente:</h4>
          <p style={{ width: "50%", fontSize: "20px" }}>
            En nuestra empresa, nos esforzamos por brindar un servicio completo
            y de calidad que satisfaga todas sus necesidades en la creación y
            gestión de sitios web. Nuestro equipo de profesionales altamente
            capacitados está a su disposición para garantizar que su sitio
          </p>
        </div>
        <div>
          <p style={{ width: "50%", fontSize: "20px" }}>
            web cumpla con los más altos estándares de diseño, funcionalidad y
            seguridad. Nuestros servicios incluyen el diseño atractivo y fácil
            de usar de su sitio web, la creación de contenido relevante y
            actualizado, la optimización para motores de búsqueda y la
            integración de un sistema de pago seguro y confiable para la venta
            de entradas para eventos. Nos aseguramos de que su sitio web cumpla
            con los requisitos necesarios para
          </p>
        </div>
        <div>
          <p style={{ width: "50%", fontSize: "20px" }}>
            ofrecer a sus visitantes una experiencia de usuario óptima. También
            garantizamos la funcionalidad sin errores y la seguridad y
            privacidad de la información del usuario, incluyendo la
            implementación de certificados de seguridad SSL y las mejores
            prácticas de seguridad. Le proporcionaremos un presupuesto que se
            adapte a sus necesidades específicas y le permita obtener el máximo
            beneficio de su inversión en línea. No dude en ponerse en contacto
            con nosotros para obtener más información sobre nuestros servicios y
            cómo podemos ayudarlo a crear el sitio web perfecto para su negocio.
            Atentamente
            <h4> [NEM SOFTWARE]</h4>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Equipo;
