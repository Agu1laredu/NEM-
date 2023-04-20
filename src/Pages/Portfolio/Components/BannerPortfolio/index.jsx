import "./Banner.css";
import { Link } from "react-router-dom";
import { Button } from "./Buttom/Button";
import ProyectoCoder from "./assets/coderproyecto.jpg";
import Nem from "./assets/nem.jpg";

const Trabajos = [
  {
    id: 20,
    cagetory: "01",
    Titulo: " EMPRESA DE SOFTWARE - NEM TECHNOLOGIES ",
    texto:
      "Nos encargamos de que la inteligencia digital se adapte a tu empresa para agilizar procesos que aumenten la productividad y las ventas. ",
    Imagen: Nem,
    url: "https://aguilarservice.netlify.app/",
  },
  {
    id: 10,
    cagetory: "02",
    Titulo: " MODELO E-COMMERCE - INSPÍRADO EN ASUS COMPANY",
    texto:
      "ASUS es una compañía multinacional de hardware informático y electrónica de consumo con sede en Taiwán, establecida en 1989. Dedicada a crear productos para la vida inteligente de hoy y mañana ",
    Imagen: "https://asuscompany.netlify.app/Imagenes/courusel1.webp",
    url: "https://asuscompany.netlify.app/index.html",
  },
  {
    id: 10,
    cagetory: "03",
    Titulo: " Construye un gran proyecto - Manual web ",
    texto:
      "Les invito a revisar los detalles de la segunda pre-entrega en los enlaces del encabezado. Espero que les resulten útiles para completar el desafío con éxito. ¡Mucho ánimo! ",
    Imagen: ProyectoCoder,
    url: "https://aguilar1998.github.io/segundaPre-entrega/index.html",
  },

  {
    id: 30,
    cagetory: "04",
    Titulo: "RANDSTAD - PLAN DE POSICIONAMIENTO WEB",
    texto:
      "Estrategia SEO para alcanzar la primera página de google con las keywords más rentables. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-01.png?w=800&ssl=1",
  },

  {
    id: 40,
    cagetory: "05",
    Titulo: " CONNECT DIGITAL",
    texto:
      "En Connect te ofrecemos el mejor servicio de Internet banda ancha para empresas gracias a nuestras redes HFC de última generación. Disfrutá del mejor internet wifi para mantener tu negocio siempre conectado. ",
    Imagen: "https://www.prometec.net/wp-content/uploads/2016/07/internet.jpg",
  },
  {
    id: 20,
    cagetory: "06",
    Titulo: " DVIGI S.A - CRM A MEDIDA",
    texto:
      "Software CRM con funciones específicas para el control de ventas y stock. Integraciones con formas de pago online y envíos. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-03.png?w=800&ssl=1",
  },
];

function Portfolio() {
  return (
    <div className="BannerPortfolio">
      {Trabajos.map(({ id, cagetory, texto, Imagen, Titulo, url }) => (
        <section key={id} className="trabajo">
          <div className="slide-in-bck-left" style={{ margin: "auto" }}>
            <h2 className="category ">{cagetory}</h2>
            <h2 className="Titulo">{Titulo}</h2>
            <p className="textos">{texto}</p>
            <a href={url}>
              <div className="Button">
                <Button texto="VER TRABAJO" color="white">
                  <Link to={url} style={{ color: "black" }} />
                </Button>
              </div>
            </a>
          </div>
          <section style={{ margin: "auto" }}>
            <img
              className="imagenTrabajo slide-in-bck-right "
              src={Imagen}
              alt=""
            />
          </section>
        </section>
      ))}
    </div>
  );
}

export default Portfolio;
