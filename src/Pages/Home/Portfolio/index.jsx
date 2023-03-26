import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
import "./Porfolio.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    Titulo: " CONNECT DIGITAL",
    texto:
      "En Connect te ofrecemos el mejor servicio de Internet banda ancha para empresas gracias a nuestras redes HFC de última generación. Disfrutá del mejor internet wifi para mantener tu negocio siempre conectado. ",
    Imagen: "https://www.prometec.net/wp-content/uploads/2016/07/internet.jpg",
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
    <div>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={46}
        slidesPerView={2}
        pagination={{ clickable: true }}
        onSlideChange={(e) => console.log(e)}
        className="SwiperSlide"
      >
        {Trabajos.map(({ Imagen, Titulo, texto }) => (
          <SwiperSlide
            className="swiper-slide"
            key={Imagen}
          >
            <h2 className="titulo">{Titulo}</h2>
            <img id="img"  src={Imagen} alt="..." />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default NoTransitionExample;
