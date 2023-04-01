import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import "./Porfolio.css";
import Nem from "./assets/nem.jpg";
import ProyectoCoder from "./assets/coderproyecto.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    Titulo: " MUVIN APP - LOGÍSTICA AGROINDUSTRIAL",
    texto:
      "Software de gestión logística que conecta a todos los actores de la cadena mediante la georreferenciación. ",
    Imagen:
      "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-02.png?w=800&ssl=1",
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

function NoTransitionExample() {
  // const swiper = useSwiper();

  const [, setSwiperRef] = useState(null);
  // const [index, setIndex] = useState(0);

  // const handleChangeIndex = (type) => {
  //   if (type === "next") {
  //   }

  //   if (type === "previous") {
  //   }
  // };

  return (
    <div className="slidernone">
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={46}
        slidesPerView={2}
        pagination={{ clickable: true }}
        onSlideChange={(e) => console.log(e)}
        className="SwiperSlide"
      >
        {Trabajos.map(({ Imagen, Titulo, texto, url }) => (
          <SwiperSlide
            className="swiper-slide"
            key={Imagen}
            style={{ display: "flex" }}
          >
            <div className="divFoto">
              <a href={url} target="blanck">
                {" "}
                <img id="img" src={Imagen} alt="..." />{" "}
              </a>
            </div>
            <div className="divTexto">
              <h2 className="titulo">{Titulo}</h2>
              <b className="texto"> {texto}</b>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NoTransitionExample;
