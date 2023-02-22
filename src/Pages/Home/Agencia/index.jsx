import { GoVerified } from "react-icons/go";
import "./agencia.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Agencia() {
  return (
    <div className="agencia">
      <div className="description" data-aos="zoom-out-left " data-aos-delay="500" data-aos-duration="5000">
        <h1 className="description__Title">AGENCIA</h1>
        <p className="description__Paragraph">
          Servicios de marketing digital que conectan a tu empresa con
          potenciales clientes.
        </p>
      </div>

      <div className="service">
        <article className="service__Responsive" data-aos="zoom-out-right">
          <div className="service__Responsive--Container">
            <GoVerified className="Icon" />
            <h3> SITIO RESPONSIVE </h3>
          </div>
          <p className="service__Responsive--Paragraph">
            Adapta tu negocio a la era mobile first con un sitio web que permita
            a los usuarios acceder desde cualquier dispositivo móvil sin
            dificultades.
          </p>
        </article>

        <article className="service__Ecommerce" data-aos="zoom-out-left">
          <div className=" service__Ecommerce--Container">
            <GoVerified className="Icon" />
            <h3>E-COMMERCE</h3>
          </div>
          <p className="service__Ecommerce--Paragraph">
            Muestra tus productos en una vidriera online que se destaque en
            celulares con formas de pago rápidas y seguras.
          </p>
        </article>
      </div>

      <div className="serviceSeo">
        <article className="serviceSeo__Positioning" data-aos="zoom-out-right">
          <div className="serviceSeo__Positioning--Container">
            <GoVerified className="Icon" />
            <h3> POSICIONAMIENTO </h3>
          </div>
          <p className="serviceSeo__Positioning--Paragraph">
            Posiciona en la primera página de google con las palabras claves más
            comerciales del rubro sin pagar anuncios digitales.
          </p>
        </article>

        <article className="serviceSeo__Advertisements" data-aos="zoom-out-left">
          <div className="serviceSeo__Advertisements--Container">
            <GoVerified className="Icon" />
            <h3>ANUNCIOS ONLINE</h3>
          </div>
          <p className="serviceSeo__Advertisements--Paragraph">
            Promociona tus productos en google, facebook e instagram con
            campañas segmentadas hacia el público objetivo más conveniente.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Agencia;
