import "./Banner.css";
import Camion from "./Assets/trabajo-02.webp";
import Dvigi from "./Assets/trabajo-03.webp";
import Ranstad from "./Assets/trabajo-01.webp";
import Megazine from "./Assets/trabajo-04.webp";
import { Link } from "react-router-dom";

const test = [
  {
    id: 10,
    cagetory: "01",
    Titulo: " MUVIN APP - LOGÍSTICA AGROINDUSTRIAL",
    texto:
      "Software de gestión logística que conecta a todos los actores de la cadena mediante la georreferenciación. ",
    Imagen: { Camion },
  },
  {
    id: 20,
    cagetory: "02",
    Titulo: " DVIGI S.A - CRM A MEDIDA",
    texto:
      "Software CRM con funciones específicas para el control de ventas y stock. Integraciones con formas de pago online y envíos. ",
    Imagen: { Dvigi },
  },
  {
    id: 30,
    cagetory: "03",
    Titulo: "RANDSTAD - PLAN DE POSICIONAMIENTO WEB",
    texto:
      "Estrategia SEO para alcanzar la primera página de google con las keywords más rentables. ",
    Imagen: { Ranstad },
  },
  {
    id: 40,
    cagetory: "04",
    Titulo: " COMUNICAR SALUD - MAGAZINE DIGITAL",
    texto:
      "Revista 100% compatible con celulares, autoadministrable y con esquema de navegación adaptado al medio.  ",
    Imagen: { Megazine },
  },
];

function Banner() {
  return (
    <div className="BannerPortfolio">
      {test.map(({ id, cagetory, texto, Imagen, Titulo }) => (
        <section key={id} className="trabajo">
          <div>
            <h2
              className="nem"
              style={{ color: "#0096d5", marginLeft: "150px" }}
            >
              {cagetory}
            </h2>
            <h2
              className="argentina"
              style={{ color: "#3b3742", marginLeft: "150px" }}
            >
              {Titulo}
            </h2>
            <p>{texto}</p>

            <button style={{ marginLeft: "290px", marginTop: "40px" }}>
              {" "}
              <Link to={"/Nosotros"} style={{ color: "black" }}>
                VER TRABAJO
              </Link>
            </button>
          </div>
          <section>
            <img className="imagenTrabajo " src={Imagen} alt="" />
          </section>
        </section>
      ))}
    </div>
  );
}

export default Banner;
