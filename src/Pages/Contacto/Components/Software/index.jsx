import { GoVerified } from "react-icons/go";

function Software() {
  return (
    <div
      className="SoftwareInfo"
      style={{ height: "600px" }}
    >
      <div style={{ position: "relative", top: "40px" }}>
        <h1 style={{ textAlign: "center" }}>SOFTWARE</h1>
        <p style={{ position: "relative", left: "350px", top: "2px" }}>
          Ofrecemos soluciones adaptándonos a cada plan de negocio con
          compromiso y dedicación.
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>OBJETIVO</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Nuestro objetivo es proporcionarte soluciones cumpliendo con los
            mejores criterios de calidad en software a medida.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>METODOLOGÍA </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Manejamos metodologías rápidas en la proyección, seguimiento y
            codificación del software con personal cualificado.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>DESARROLLO</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Nos orientamos a entender tus necesidades para crear un software
            personalizado que pueda cumplir con los objetivos trazados.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <GoVerified
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>MANTENIMIENTO</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Ofrecemos soporte técnico de todos los programas creados para que
            puedas operar con tranquilidad y sacarle la máxima rentabilidad.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Software;
