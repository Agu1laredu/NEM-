import "./Banner.css";
import { Link } from "react-router-dom";

const Trabajos = [
  {
    id: 10,
    cagetory: "01",
    Titulo: " MUVIN APP - LOGÍSTICA AGROINDUSTRIAL",
    texto:
      "Software de gestión logística que conecta a todos los actores de la cadena mediante la georreferenciación. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-02.png?w=800&ssl=1",
  },
  {
    id: 20,
    cagetory: "02",
    Titulo: " DVIGI S.A - CRM A MEDIDA",
    texto:
      "Software CRM con funciones específicas para el control de ventas y stock. Integraciones con formas de pago online y envíos. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-03.png?w=800&ssl=1",
  },
  {
    id: 30,
    cagetory: "03",
    Titulo: "RANDSTAD - PLAN DE POSICIONAMIENTO WEB",
    texto:
      "Estrategia SEO para alcanzar la primera página de google con las keywords más rentables. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-01.png?w=800&ssl=1",
  },
  {
    id: 40,
    cagetory: "04",
    Titulo: " COMUNICAR SALUD - MAGAZINE DIGITAL",
    texto:
      "Revista 100% compatible con celulares, autoadministrable y con esquema de navegación adaptado al medio.  ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-04.png?w=800&ssl=1",
  },
];

function Portfolio() {
  return (
    <div className="BannerPortfolio">
      {Trabajos.map(({ id, cagetory, texto, Imagen, Titulo }) => (
        <section key={id} className="trabajo">
          <div>
            <h2 className="category">{cagetory}</h2>
            <h2 className="Titulo">{Titulo}</h2>
            <p>{texto}</p>

            <button className="Button">
              <Link style={{ color: "black" }}>VER TRABAJO</Link>
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

export default Portfolio;
