import { GoVerified } from "react-icons/go";
import styled from "styled-components";


function Software() {
  const Line = styled.div`
    border-bottom: 1px solid black;
    width: 60%;
    margin: 10rem auto 0;
  `

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
    padding-bottom: 10rem;
  `

  return (
    <Container>
      <FlexContentCol>
        <h1>SOFTWARE</h1>
        <p>
          Ofrecemos soluciones adaptándonos a cada plan de negocio con
          compromiso y dedicación.
        </p>
      </FlexContentCol>

      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <GoVerified />
            <MyH3>
              OBJETIVO
            </MyH3>
          </FlexItemCol>
          <p>
            Nuestro objetivo es proporcionarte soluciones cumpliendo con los
            mejores criterios de calidad en software a medida.
          </p>
        </FlexContentCol>
        <FlexContentCol>
          <FlexItemCol>
            <GoVerified />
            <MyH3>
              METODOLOGÍA{" "}
            </MyH3>
          </FlexItemCol>
          <p>
            Manejamos metodologías rápidas en la proyección, seguimiento y
            codificación del software con personal cualificado.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
      <FlexContainerRow>
        <FlexContentCol>
          <FlexItemCol>
            <GoVerified />
            <MyH3>
              DESARROLLO
            </MyH3>
          </FlexItemCol>
          <p>
            Nos orientamos a entender tus necesidades para crear un software
            personalizado que pueda cumplir con los objetivos trazados.
          </p>
        </FlexContentCol>
        <FlexContentCol>
          <FlexItemCol>
            <GoVerified />
            <MyH3>
              MANTENIMIENTO
            </MyH3>
          </FlexItemCol>
          <p>
            Ofrecemos soporte técnico de todos los programas creados para que
            puedas operar con tranquilidad y sacarle la máxima rentabilidad.
          </p>
        </FlexContentCol>
      </FlexContainerRow>
      <Line>
      </Line>
    </Container>
  );
}

export default Software;
