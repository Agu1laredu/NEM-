import "./Banner.css";
import BannerImg from "./assets/th.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <section className="banner__Publicitario">
        <div className="banner__Publicitario--Container">
          <b className="b">
            EMPRESA DE SOFTWARE{" "}
          </b>
          <h2 className="banner__Publicitario--Container-Nem">
            NEM TECHNOLOGIES  {" "}
          </h2>
          <h2 className="banner__Publicitario--Container-Argentina">
            ARGENTINA
          </h2>
          <p>
            Nos encargamos de que la inteligencia digital se adapte a tu empresa
            para agilizar procesos que aumenten la productividad y las ventas.
          </p>
          <button class="btn third">
            {" "}
            <Link to={"/Nosotros"} style={{textDecoration: 'none', color: 'white'}}>LEER MÀS</Link>
          </button>
        </div>
      </section>
      <section className="banner__Ilustracion ">
        <img src={BannerImg} alt="Imagen del banner" />
      </section>
    </div>
  );
}

export default Banner;
