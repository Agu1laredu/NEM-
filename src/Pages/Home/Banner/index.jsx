import "./Banner.css";
import BannerImg from "./assets/th.jpg";
import "animate.css";
import { Button } from "../../../Components/Buttom/Button";

function Banner() {
  return (
    <div className="banner">
      <section className="banner__Publicitario slide-in-bck-left">
        <div className="banner__Publicitario--Container">
          <b>EMPRESA DE SOFTWARE </b>
          <h2>PIXEL PILOT TECHNOLOGIES </h2>
          <h3>ARGENTINA</h3>
          <p>
            Nos encargamos de que la inteligencia digital se adapte a tu empresa
            para agilizar procesos que aumenten la productividad y las ventas.
          </p>
          <div id="Button">
            <Button className="buttons" color="white" texto="Leer más" />
          </div>
        </div>
      </section>
      <section className="banner__Ilustracion">
        <img
          className="slide-in-bck-right"
          src={BannerImg}
          alt="Imagen del banner"
        />
      </section>
    </div>
  );
}

export default Banner;
