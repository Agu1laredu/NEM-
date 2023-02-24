import styled from "styled-components";
import { Button } from "../../../../Components/Buttom/Button";

function Formulario() {
  const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    `
  const ContainerCol = styled.div`
    background-color: #0096d5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 4rem auto;
    & form{
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 50vw;
    }

    @media (max-width: 1000px) {
      width: 100%;
      & p{
        width: 80%;
      }
      & form{
        min-width: 80vw;
      }
    }

  `
  const MyH3 = styled.h3`
    font-size: 18px;
    
  `
  

  return (
    <ContainerForm>
      <ContainerCol>
        <MyH3>
          ESCRÍBENOS
        </MyH3>
        <p>
          Empresa de software con experiencia. Soluciones a medida. Solicita un
          presupuesto sin compromiso.
        </p>
        <form action="">
          <input
            type="text"
            placeholder="Nombre"
          />
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="text"
            placeholder="Celular"
          />
          <textarea placeholder="Mensaje"></textarea>
          <Button color='#0096d5' texto='Enviar' />
        </form>
      </ContainerCol>
    </ContainerForm>
  );
}

export default Formulario;
