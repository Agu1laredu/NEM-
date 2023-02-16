import "./Porfolio.css";
import imagenTres from "./assets/th.jpg";
import imagenDos from "./assets/b5ed810a-4e20-46a5-a278-50ece165bde9.jpg";
import imagenUno from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";
import imagenCuatro from "./assets/maxresdefault.jpg";


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
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item" style={{ display: "flex" }}>
          <img src={imagenTres} className="d-block w-100" alt="..." />
          <img src={imagenDos} className="d-block w-100" alt="..." />
          <img src={imagenUno} className="d-block w-100" alt="..." />
          <img src={imagenCuatro} className="d-block w-100" alt="..." />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{position: 'relative', top: '-10px', left: '500px'}}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{position: 'relative', top: '-10px', left: '600px'}}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default NoTransitionExample;
