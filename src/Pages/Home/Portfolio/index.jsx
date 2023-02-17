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

