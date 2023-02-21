import {
  AiOutlineSetting,
  AiOutlineShake,
  AiOutlineShoppingCart,
  AiOutlineLaptop,
  AiOutlineComment,
  AiOutlineCluster,
  AiOutlineStock,
  AiOutlineSound,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import "./servicios.css";

function Servicios() {
  return (
    <div className="SoftwareInfo">
      <div className="divInfo">
        <h2 className="h2info">SERVICIOS</h2>
        <p className="PInfo">
          Brindamos una gama de servicios para conectar a tu empresa con
          potenciales clientes.
        </p>
      </div>
      <div className="divArticle">
        <article className="articuloServicio">
          <AiOutlineSetting
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px" }}>SOFTWARE</h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Desarrollo de programas a medida con agregado de nuevas funciones y
            mantenimiento.
          </p>
        </article>
        <article
          className="article"
          style={{ marginTop: "100px", marginLeft: "50px" }}
        >
          <AiOutlineShake
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "320px", width: "30%" }}>
            APPS{" "}
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Desarrollo de apps multiplataforma Android y Apple con base de datos
            sincronizados.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article className="articuloServicio" style={{ marginTop: "100px" }}>
          <AiOutlineShoppingCart
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "280px", width: "30%" }}>
            E-COMMERCE
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Tienda online adaptada a móviles con protocolo de seguridad,
            configuración de pagos y envíos.
          </p>
        </article>
        <article
          className="article"
          style={{ marginTop: "100px", marginLeft: "50px" }}
        >
          <AiOutlineLaptop
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px", width: "30%" }}>
            SITIO WEB{" "}
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Registro de dominio, administración de hosting y diseño adaptado a
            celulares.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article className="articuloServicio" style={{ marginTop: "100px" }}>
          <AiOutlineComment
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px", width: "30%" }}>
            CHAT BOT
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Instalación y configuración con atención al cliente las 24 horas.
            Soporte técnico.
          </p>
        </article>
        <article
          className="article"
          style={{ marginTop: "100px", marginLeft: "50px" }}
        >
          <AiOutlineCluster
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px", width: "30%" }}>
            REDES ADS{" "}
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Campañas integradas en Redes Sociales. Facebook e Instagram con
            WhatsApp Business.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article className="articuloServicio" style={{ marginTop: "100px" }}>
          <AiOutlineStock
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "330px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px", width: "30%" }}>
            AGENCIA SEO
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Evaluación de las palabras claves rentables con plan de trabajo e
            informe mensual. Resultados duraderos.
          </p>
        </article>
        <article
          className="article"
          style={{ marginTop: "100px", marginLeft: "50px" }}
        >
          <AiOutlineSound
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "330px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px", width: "30%" }}>
            GOOGLE ADS{" "}
          </h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Campañas publicitarias profesionales con público segmentado y
            optimización diaria. Informe mensual.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article className="articuloServicio" style={{ marginTop: "100px" }}>
          <AiOutlineFundProjectionScreen
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "330px",
              fontSize: "50",
              color: "#0096d5",
            }}
          />
          <h3 style={{ position: "relative", left: "300px" }}> SHOPPING</h3>
          <p style={{ position: "relative", top: "60px", left: "50px" }}>
            Configuración de tienda online dentro de Facebook y de Instagram
            Shopping para incrementar las ventas.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Servicios;
