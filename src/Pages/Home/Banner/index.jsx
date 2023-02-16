import "./Banner.css";
import BannerImg from "./assets/th.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
<<<<<<< HEAD:src/Components/Home/Banner/index.jsx
    <div className="banner">
      <section className="banner__Publicitario">
        <div className="banner__Publicitario--Container">
          <b className="b">
            EMPRESA DE SOFTWARE{" "}
          </b>
          <h2 className="banner__Publicitario--Container-Nem">
            NEM{" "}
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
            <Link to={"/Nosotros"}>LEER MÀS</Link>
          </button>
        </div>
=======
    <div className="Banner">
      <section className="publicitario">
        <b className="b" style={{ color: "#3b3742", marginLeft: "150px" }}>
          EMPRESA DE SOFTWARE{" "}
        </b>
        <h2 className="nem" style={{ color: "#fff8e1", marginLeft: "150px" }}>
          NEM TECHNOLOGIES{" "}
        </h2>
        <h2
          className="argentina"
          style={{ color: "#3b3742", marginLeft: "150px" }}
        >
          ARGENTINA
        </h2>
        <p>
          Nos encargamos de que la inteligencia digital se adapte a tu empresa
          para agilizar procesos que aumenten la productividad y las ventas.
        </p>

        <button style={{ marginLeft: "290px", marginTop: "40px" }}>
          {" "}
          <Link to={"/Nosotros"} style={{ color: "black" }}>
            LEER MÀS
          </Link>
        </button>
>>>>>>> 6102555d6d9fc2d3a10f6d60a3d4f8d24dfcc613:src/Pages/Home/Banner/index.jsx
      </section>
      <section className="banner__Ilustracion ">
        <img src={BannerImg} alt="Imagen del banner" />
      </section>
    </div>
  );
}

export default Banner;
