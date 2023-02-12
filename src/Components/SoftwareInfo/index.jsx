import "./Infosoft.css";

import { GoVerified } from "react-icons/go";

function SoftwareInfo() {
  return (
    <div className="SoftwareInfo">
      <h1>SOFTWARE</h1>
      <p style={{ position: "relative", left: "350px", top: "2px" }}>
        Años de experiencia que nos permiten brindar soluciones a medida para
        empresas, marcas, pymes y emprendedores.
      </p>

      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>SOFTWARE ERP </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Automatiza los procesos internos reduciendo los costos con un
            sistema de gestión que se adapte para impulsar la productividad.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>SOFTWARE CRM </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Incrementa las ventas con un sistema enfocado en lo que necesitan
            los vendedores para establecer vínculos adecuados con los clientes.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>SOFTWARE SGA </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Controla tu almacén de forma ordenada teniendo información
            actualizada del stock de productos para prever reposiciones y
            agilizar los envíos.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>SOFTWARE RRHH</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Mejora el rendimiento del personal atendiendo sus necesidades con un
            programa de recursos humanos acorde a lo que requiere cada sector.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>APP A MEDIDA </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Utiliza una aplicación móvil para fidelizar clientes con contenido
            innovador, promociones, atención personalizada y push notifications.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>CHAT BOT</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Optimiza la comunicación con inteligencia artificial para brindar
            atención al cliente las veinticuatro horas o mejorar las relaciones
            dentro de la empresa.
          </p>
        </article>
      </div>
    </div>
  );
}

export default SoftwareInfo;
