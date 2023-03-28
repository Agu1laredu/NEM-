import { Button } from "../Buttom/Button";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <div className="formulario__Invitacion">
        <h3 className="h3">
          ¿NECESITAS AYUDA?
        </h3>
        <h3>
          ESCRÍBENOS
        </h3>
        <p className="p">
          Empresa de software con experiencia. Soluciones a medida. Solicita un
          presupuesto sin compromiso.
        </p>
      </div>

      <div className="formulario__ContainerForm">
        <form
          className="formulario__ContainerForm--Form"
          action=""
        >
          <input
          className="uno"
            type="text"
            placeholder="Nombre"
          />
          <input
           className="dos"
            type="email"
            placeholder="Email"
          />
          <input className="tres"
            type="text"
            placeholder="Celular"
          />
          <textarea placeholder="Mensaje"></textarea>
         <div className="buttons">
             <Button color= 'white' texto= 'Enviar'/>
         </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
