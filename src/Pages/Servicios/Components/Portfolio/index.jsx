import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useState } from "react";
// import "./Porfolio.css";

import imagenTres from "./assets/th.jpg";
import imagenDos from "./assets/b5ed810a-4e20-46a5-a278-50ece165bde9.jpg";
import imagenUno from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";
import imagenCuatro from "./assets/maxresdefault.jpg";


const image = [
  {
    Imagen: imagenTres
  },
  {
    Imagen: imagenDos
  },
  {
    Imagen: imagenUno
  },
  {
    Imagen: imagenCuatro
  }
]

function CarrouselServicios() {
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
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={(e) => console.log(e)}
          >
            {image.map(({ Imagen }) => (
              <SwiperSlide key={Imagen}>
                <img id="img" src={Imagen} alt="..." />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
  
}
export default CarrouselServicios



