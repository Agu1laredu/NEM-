import "./porfolio.css";
import imagenTres from "./assets/th.jpg";
import imagenDos from "./assets/b5ed810a-4e20-46a5-a278-50ece165bde9.jpg";
import imagenUno from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";
import imagenCuatro from "./assets/maxresdefault.jpg";

function NoTransitionExample() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carouselExample__Inner">

        <div className="carouselExample__Inner--Item" style={{ display: "flex" }}>

          <img src={imagenTres} className="d-block w-100" alt="..." />
          <img src={imagenDos} className="d-block w-100" alt="..." />
          <img src={imagenUno} className="d-block w-100" alt="..." />
          <img src={imagenCuatro} className="d-block w-100" alt="..." />

        </div>
        
        <div className="carouselExample__Button">

          <button
            className="btn first carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>

          <button
            className=" btn first carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"

          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default NoTransitionExample;
