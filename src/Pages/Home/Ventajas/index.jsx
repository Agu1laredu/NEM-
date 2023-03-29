import { AiFillLike } from "react-icons/ai";
import styled from "styled-components";

function Ventajas() {
  const MyH3 = styled.h3`
    font-size: 18px;
    margin-bottom: 30px;
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

    p {
      width: 50%;
    }
    @media (max-width: 1300px) {
      justify-content: center;
      width: 80%;
      margin: auto;
      height: auto;
    }
    @media (max-width: 1000px) {
      justify-content: center;
      width: 80%;
      margin: auto;
      height: auto;
    }
  `;
  const FlexItemCol = styled.article`
    display: flex;
    position: relative;
    top: 50px;
    flex-direction: column;
    align-items: center;
    font-size: xx-large;

    & p {
      font-size: large;
      position: relative;
      top: 100px;
    }

    @media (max-width: 1000px) {
      top: 50px;
      & p {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  `;
  const FlexItemColUno = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem auto;
    font-size: xx-large;

    & p {
      font-size: large;
      margin: -10px auto;
    }

    @media (max-width: 1000px) {
      & p {
        width: 75%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px auto;
      }
    }
  `;
  const Container = styled.div`
    height: 100%;
    padding: 5% 0;
    background-color: #e3e1e1;
  `;
  return (
    <Container>
      <FlexItemColUno
        data-aos="slip-up"
        data-aos-delay="500"
        data-aos-duration="5000"
      >
        <h2>VENTAJAS</h2>
        <p className="P">
          El desarrollo de programas a medida brinda soluciones que se ajustan a
          las exigencias de cada empresa y a los cambios que surgen con su
          crecimiento.
        </p>
      </FlexItemColUno>

      <FlexContainerRow>
        <FlexContentCol
          data-aos="zoom-out-left "
          data-aos-delay="200"
          data-aos-duration="5000"
        >
          <FlexItemCol>
            <AiFillLike />
            <MyH3>MENOR GASTO </MyH3>
          </FlexItemCol>
          <p>
            Poner en marcha un software a medida necesita de una buena inversión
            inicial, pero cuando comienza a trabajar se recupera lo invertido en
            poco tiempo. Los beneficios de optimizar procesos son enormes a
            largo plazo.
          </p>
        </FlexContentCol>
        <FlexContentCol
          data-aos="zoom-out-right "
          data-aos-delay="200"
          data-aos-duration="5000"
        >
          <FlexItemCol>
            <AiFillLike />
            <MyH3>AHORRO DE TIEMPO </MyH3>
          </FlexItemCol>
          <p>
            Un software personalizado es capaz de reducir a minutos una o varias
            tareas que antes llevaban días o semanas. La economía del tiempo
            supone un aumento considerable de la productividad.
          </p>
        </FlexContentCol>
      </FlexContainerRow>

      <FlexContainerRow>
        <FlexContentCol
          data-aos="zoom-out-left "
          data-aos-delay="300"
          data-aos-duration="5000"
        >
          <FlexItemCol>
            <AiFillLike />
            <MyH3>INTEGRACIÓN </MyH3>
          </FlexItemCol>
          <p>
            El software a medida es una gran solución para la integración. Las
            empresas que utilizan varios programas pueden disfrutar de los
            beneficios de trabajar con una plataforma que integre múltiples
            procesos.
          </p>
        </FlexContentCol>
        <FlexContentCol
          data-aos="zoom-out-right "
          data-aos-delay="300"
          data-aos-duration="5000"
        >
          <FlexItemCol>
            <AiFillLike />
            <MyH3>FLEXIBILIDAD</MyH3>
          </FlexItemCol>
          <p>
            Los programas a medida pueden ser modificados de acuerdo a las
            necesidades de la empresa. El software evoluciona para satisfacer
            las nuevas demandas con un presupuesto inferior a la inversión
            inicial.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
    </Container>
  );
}

export default Ventajas;
