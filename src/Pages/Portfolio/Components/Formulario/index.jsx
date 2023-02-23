import styled from "styled-components";
import { Button } from "../../../../Components/Buttom/Button";
import "./Formulario.css";

function Formulario() {
  const Form = styled.form`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const FormDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
  `
  const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10% 0;
  `
  return (
    <ContainerForm>
      <FormDescription>
        <h3>
          ESCRÍBENOS
        </h3>
        <p>
          Empresa de software con experiencia. Soluciones a medida. Solicita un
          presupuesto sin compromiso.
        </p>
      </FormDescription>
      <Form
      >
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
        <Button color='white' texto='Enviar' />
      </Form>
    </ContainerForm>
  );
}

export default Formulario;
