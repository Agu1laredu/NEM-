import "./Porfolio.css";
import imagenTres from "./assets/th.jpg";
import imagenDos from "./assets/b5ed810a-4e20-46a5-a278-50ece165bde9.jpg";
import imagenUno from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";
import imagenCuatro from "./assets/maxresdefault.jpg";

function NoTransitionExample() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item" style={{ display: "flex" }}>
          <img src={imagenTres} className="d-block w-100" alt="..." />
          <img src={imagenDos} className="d-block w-100" alt="..." />
          <img src={imagenUno} className="d-block w-100" alt="..." />
          <img src={imagenDos} className="d-block w-100" alt="..." />
          <img src={imagenCuatro} className="d-block w-100" alt="..." />
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          style={{position: 'relative', top: '-10px', left: '-50px'}}
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          style={{position: 'relative', top: '-10px', left: '10px'}}
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default NoTransitionExample;
