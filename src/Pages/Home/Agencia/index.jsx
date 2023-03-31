import { GoVerified } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import styled from "styled-components";
// ..
AOS.init();

function Agencia() {
  const MyH3 = styled.h3`
    font-size: 18px;
  `;

  const FlexContainerRow = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  `;

  const FlexContentCol = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: auto;
    height: 20vh;

    & p {
      width: 80%;
    }

    @media (max-width: 1000px) {
      justify-content: center;
      width: 90%;
      margin: auto;
      height: auto;

      & p {
        width: 100%;
      }

    }
  `;
  const FlexItemCol = styled.article`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    font-size: xx-large;
    .description__Title {
      width: 100%;
      position: relative;
      left: 42%;
     
    }
    & p {
      font-size: large;
      margin: 0% auto;
    }

 
    
    @media (max-width: 800px) {
      .description__Title {
        left: 300px;
      }
    }

    @media (max-width: 600px) {
      .description__Title {
        width: 40%;
        position: relative;
        left: -25px;
      }
    }
  `;
  const Container = styled.div`
    height: 100%;
    margin: 5% 0;
    background-color: #e3e1e1;
  `;
  return (
    <Container>
      <FlexItemCol
        data-aos="zoom-out-left "
        data-aos-delay="500"
        data-aos-duration="5000"
      >
        <h1 className="description__Title">AGENCIA</h1>
        <p className="description__Paragraph">
          Servicios de marketing digital que conectan a tu empresa con
          potenciales clientes.
        </p>
      </FlexItemCol>

      <FlexContainerRow>
        <FlexContentCol data-aos="zoom-out-right">
          <FlexItemCol>
            <GoVerified />
            <MyH3> SITIO RESPONSIVE </MyH3>
          </FlexItemCol>
          <p className="service__Responsive--Paragraph">
            Adapta tu negocio a la era mobile first con un sitio web que permita
            a los usuarios acceder desde cualquier dispositivo móvil sin
            dificultades.
          </p>
        </FlexContentCol>

        <FlexContentCol data-aos="zoom-out-left">
          <FlexItemCol>
            <GoVerified />
            <MyH3>E-COMMERCE</MyH3>
          </FlexItemCol>
          <p className="service__Ecommerce--Paragraph">
            Muestra tus productos en una vidriera online que se destaque en
            celulares con formas de pago rápidas y seguras.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      <FlexContainerRow>
        <FlexContentCol data-aos="zoom-out-right">
          <FlexItemCol>
            <GoVerified className="Icon" />
            <MyH3> POSICIONAMIENTO </MyH3>
          </FlexItemCol>
          <p className="serviceSeo__Positioning--Paragraph">
            Posiciona en la primera página de google con las palabras claves más
            comerciales del rubro sin pagar anuncios digitales.
          </p>
        </FlexContentCol>

        <FlexContentCol data-aos="zoom-out-left">
          <FlexItemCol>
            <GoVerified className="Icon" />
            <MyH3>ANUNCIOS ONLINE</MyH3>
          </FlexItemCol>
          <p className="serviceSeo__Advertisements--Paragraph">
            Promociona tus productos en google, facebook e instagram con
            campañas segmentadas hacia el público objetivo más conveniente.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
    </Container>
  );
}

export default Agencia;
