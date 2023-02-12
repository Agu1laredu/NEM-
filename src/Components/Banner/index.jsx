import "./Banner.css";
import BannerImg from "./assets/pasos-para-desarrollar-tu-pagina-web.jpg";

function Banner() {
  return (
    <div className="Banner">
      <section className="publicitario">
        <b className="b" style={{ color: "#3b3742", marginLeft: "-200px"}}>
          EMPRESA DE SOFTWARE{" "}
        </b>
        <h2 className="nem" style={{ color: "#fff8e1", marginLeft: "-340px" }}>NEM </h2>
        <h2 className="argentina" style={{ color: "#3b3742", marginLeft: "-250px" }}>ARGENTINA</h2>
        <p>
          Nos encargamos de que la inteligencia digital se adapte a tu empresa
          para agilizar procesos que aumenten la productividad y las ventas.
        </p>

        <button>LEER MÀS</button>
      </section>
      <section className="ilustracion">
        <img src={BannerImg} alt="" className="animate__pulse"/>
      </section>
    </div>
  );
}

export default Banner;
