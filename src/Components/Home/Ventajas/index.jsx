import { AiFillLike } from "react-icons/ai";

function Ventajas() {
  return (
    <div className="SoftwareInfo" style={{ backgroundColor: "#f7f7f7" , height: '700px', marginBottom: '-20px'}}>
      <div style={{ position: "relative", top: "40px" }}>
        <h2 style={{ textAlign: "center" }}>VENTAJAS</h2>
        <p style={{ position: "relative", left: "350px", top: "2px" }}>
          El desarrollo de programas a medida brinda soluciones que se ajustan a
          las exigencias de cada empresa y a los cambios que surgen con su
          crecimiento.
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <AiFillLike
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>MENOR GASTO </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Poner en marcha un software a medida necesita de una buena inversión
            inicial, pero cuando comienza a trabajar se recupera lo invertido en
            poco tiempo. Los beneficios de optimizar procesos son enormes a
            largo plazo.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <AiFillLike
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>
            AHORRO DE TIEMPO{" "}
          </h3>
          <p style={{ position: "relative", top: "10px" }}>
            Un software personalizado es capaz de reducir a minutos una o varias
            tareas que antes llevaban días o semanas. La economía del tiempo
            supone un aumento considerable de la productividad.
          </p>
        </article>
      </div>
      <div style={{ display: "flex" }}>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <AiFillLike
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>INTEGRACIÓN </h3>
          <p style={{ position: "relative", top: "10px" }}>
            El software a medida es una gran solución para la integración. Las
            empresas que utilizan varios programas pueden disfrutar de los
            beneficios de trabajar con una plataforma que integre múltiples
            procesos.
          </p>
        </article>
        <article
          className="article"
          style={{ width: "47.25%", marginTop: "50px" }}
        >
          <AiFillLike
            style={{
              marginBottom: "-20px",
              position: "relative",
              left: "320px",
            }}
          />
          <h3 style={{ position: "relative", left: "260px" }}>FLEXIBILIDAD</h3>
          <p style={{ position: "relative", top: "10px" }}>
            Los programas a medida pueden ser modificados de acuerdo a las
            necesidades de la empresa. El software evoluciona para satisfacer
            las nuevas demandas con un presupuesto inferior a la inversión
            inicial.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Ventajas;
