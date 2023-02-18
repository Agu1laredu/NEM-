import imagenTres from "./assets/th.jpg";
import imagenDos from "./assets/b5ed810a-4e20-46a5-a278-50ece165bde9.jpg";
import imagenUno from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";
import imagenCuatro from "./assets/maxresdefault.jpg";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useState } from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// const Trabajos = [
//   {
//     id: 10,
//     cagetory: "01",
//     Titulo: " MUVIN APP - LOGÍSTICA AGROINDUSTRIAL",
//     texto:
//       "Software de gestión logística que conecta a todos los actores de la cadena mediante la georreferenciación. ",
//     Imagen:
//       "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-02.png?w=800&ssl=1",
//   },
//   {
//     id: 20,
//     cagetory: "02",
//     Titulo: " DVIGI S.A - CRM A MEDIDA",
//     texto:
//       "Software CRM con funciones específicas para el control de ventas y stock. Integraciones con formas de pago online y envíos. ",
//     Imagen:
//       "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-03.png?w=800&ssl=1",
//   },
//   {
//     id: 30,
//     cagetory: "03",
//     Titulo: "RANDSTAD - PLAN DE POSICIONAMIENTO WEB",
//     texto:
//       "Estrategia SEO para alcanzar la primera página de google con las keywords más rentables. ",
//     Imagen:
//       "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-01.png?w=800&ssl=1",
//   },
//   {
//     id: 40,
//     cagetory: "04",
//     Titulo: " COMUNICAR SALUD - MAGAZINE DIGITAL",
//     texto:
//       "Revista 100% compatible con celulares, autoadministrable y con esquema de navegación adaptado al medio.  ",
//     Imagen:
//       "https://i0.wp.com/www.softcom.com.ar/wp-content/uploads/2019/12/trabajo-04.png?w=800&ssl=1",
//   },
// ];

function NoTransitionExample() {

  const swiper = useSwiper()

  const [swiperRef, setSwiperRef] = useState(null)
  const [index, setIndex] = useState(0)

  const handleChangeIndex = (type) => {
    if (type === 'next') {

    }

    if (type === 'previous') {

    }
  }


  return (
    <div>
      <Swiper
        onSwiper={setSwiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={2}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(e) => console.log(e)}
      >
        <SwiperSlide>
          <img src={imagenUno} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagenDos} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagenTres} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imagenCuatro} alt="..." />
        </SwiperSlide>
      </Swiper>
      <p>
        <button onClick={() => handleChangeIndex('previous')} className="prepend-2-slides">
          Anterior
        </button>
        <button onClick={() => handleChangeIndex('next')} className="prepend-slide">
          Siguiente
        </button>
      </p>
    </div>
  );
}

export default NoTransitionExample;

