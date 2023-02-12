import { GoVerified } from "react-icons/go";

function Agencia() {
  return (
    <div className="SoftwareInfo" style={{ backgroundColor: "#f7f7f7" }}>
      <div style={{ position: 'relative', top: '40px'}}>
        <h1>AGENCIA</h1>
        <p style={{ position: "relative", left: "350px", top: "2px" }}>
          Servicios de marketing digital que conectan a tu empresa con
          potenciales clientes.
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>SITIO RESPONSIVE </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Adapta tu negocio a la era mobile first con un sitio web que permita
            a los usuarios acceder desde cualquier dispositivo móvil sin
            dificultades.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>E-COMMERCE </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Muestra tus productos en una vidriera online que se destaque en
            celulares con formas de pago rápidas y seguras.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>POSICIONAMIENTO </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Posiciona en la primera página de google con las palabras claves más
            comerciales del rubro sin pagar anuncios digitales.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified style={{ marginBottom: "-20px" }} />
          <h3>ANUNCIOS ONLINE</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Promociona tus productos en google, facebook e instagram con
            campañas segmentadas hacia el público objetivo más conveniente.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Agencia;
