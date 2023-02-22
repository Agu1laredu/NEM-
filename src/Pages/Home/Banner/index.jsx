import "./Banner.css";
import BannerImg from "./assets/th.jpg";
import { Link } from "react-router-dom";
import 'animate.css';



function Banner() {
  return (
    <div className="banner">
      <section className="banner__Publicitario slide-in-bck-left">
        <div className="banner__Publicitario--Container">
          <b className="b animate__bounceInLeft ">
            EMPRESA DE SOFTWARE{" "}
          </b>
          <h2 className="banner__Publicitario--Container-Nem animate__bounceInLeft">
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
      <section className="banner__Ilustracion">
        <img className="slide-in-bck-right" src={BannerImg} alt="Imagen del banner" />
      </section>
    </div>
  );
}

export default Banner;
