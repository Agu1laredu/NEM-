import styled from "styled-components";
import {
  AiOutlineSetting,
  AiOutlineShake,
  AiOutlineShoppingCart,
  AiOutlineLaptop,
  AiOutlineComment,
  AiOutlineCluster,
  AiOutlineStock,
  AiOutlineSound,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

function Servicios() {
  const MyH3 = styled.h3`
    font-size: 18px;
  `

  const FlexContainerRow = styled.div`
    display: flex;
    justify-content: center;
  `

  const FlexContentCol = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: auto;
    height: 20vh;
  `;
  const FlexItemCol = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    font-size: xx-large;
  `;
  const Container = styled.div`
    height: 100%;
  `





  return (
    <Container>
      <FlexContentCol>
        <h1>AGENCIA</h1>
        <p>
          Servicios de marketing digital que conectan a tu empresa con
          potenciales clientes.
        </p>
      </FlexContentCol>

      {/* -------------------------------------------- */}

      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineSetting />
            <MyH3>SOFTWARE</MyH3>
          </FlexItemCol>
          <p>
            Desarrollo de programas a medida con agregado de nuevas funciones y
            mantenimiento.
          </p>
        </FlexContentCol>
        <FlexContentCol>

          <FlexItemCol>
            <AiOutlineShake />
            <MyH3 >APPS </MyH3>
          </FlexItemCol>
          <p>
            Desarrollo de apps multiplataforma Android y Apple con base de datos
            sincronizados.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      {/* -------------------------------------------- */}

      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineShoppingCart />
            <MyH3>E-COMMERCE</MyH3>
          </FlexItemCol>
          <p>
            Tienda online adaptada a móviles con protocolo de seguridad,
            configuración de pagos y envíos.
          </p>
        </FlexContentCol>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineLaptop
            />
            <MyH3>SITIO WEB </MyH3>
          </FlexItemCol>
          <p>
            Registro de dominio, administración de hosting y diseño adaptado a
            celulares.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      {/* -------------------------------------------- */}

      <FlexContainerRow>
        <FlexContentCol >
          <FlexItemCol>
            <AiOutlineComment />
            <MyH3>CHAT BOT</MyH3>
          </FlexItemCol>
          <p>
            Instalación y configuración con atención al cliente las 24 horas.
            Soporte técnico.
          </p>
        </FlexContentCol>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineCluster />
            <MyH3>REDES ADS </MyH3>
          </FlexItemCol>
          <p>
            Campañas integradas en Redes Sociales. Facebook e Instagram con
            WhatsApp Business.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      {/* -------------------------------------------- */}

      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineStock />
            <MyH3>AGENCIA SEO</MyH3>
          </FlexItemCol>
          <p>
            Evaluación de las palabras claves rentables con plan de trabajo e
            informe mensual. Resultados duraderos.
          </p>
        </FlexContentCol>
        <FlexContentCol >
          <FlexItemCol>
            <AiOutlineSound />
            <MyH3>GOOGLE ADS </MyH3>
          </FlexItemCol>
          <p>
            Campañas publicitarias profesionales con público segmentado y
            optimización diaria. Informe mensual.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      {/* -------------------------------------------- */}

      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <AiOutlineFundProjectionScreen />
            <MyH3> SHOPPING</MyH3>
          </FlexItemCol>
          <p>
            Configuración de tienda online dentro de Facebook y de Instagram
            Shopping para incrementar las ventas.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
    </Container>
  );
}

export default Servicios;
