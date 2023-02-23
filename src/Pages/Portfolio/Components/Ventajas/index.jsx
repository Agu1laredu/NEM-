import { AiFillLike } from "react-icons/ai";
import styled from "styled-components";

function Ventajas() {
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
      <FlexContentCol data-aos="slip-up" data-aos-delay="500" data-aos-duration="5000">
        <h2>VENTAJAS</h2>
        <p>
          El desarrollo de programas a medida brinda soluciones que se ajustan a
          las exigencias de cada empresa y a los cambios que surgen con su
          crecimiento.
        </p>
      </FlexContentCol>

      <FlexContainerRow>
        <FlexContentCol data-aos="zoom-out-left " data-aos-delay="200" data-aos-duration="5000">
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
        <FlexContentCol data-aos="zoom-out-right " data-aos-delay="200" data-aos-duration="5000">
          <FlexItemCol>
            <AiFillLike />
            <MyH3>
              AHORRO DE TIEMPO{" "}
            </MyH3>
          </FlexItemCol>
          <p>
            Un software personalizado es capaz de reducir a minutos una o varias
            tareas que antes llevaban días o semanas. La economía del tiempo
            supone un aumento considerable de la productividad.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
      <FlexContainerRow>
        <FlexContentCol data-aos="zoom-out-left " data-aos-delay="200" data-aos-duration="5000">
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
        <FlexContentCol data-aos="zoom-out-right " data-aos-delay="200" data-aos-duration="5000">
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
