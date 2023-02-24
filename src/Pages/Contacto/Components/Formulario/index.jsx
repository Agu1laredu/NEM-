import { Button } from "../../../../Components/Buttom/Button";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <div className="">
        <h3>
        ESCRÍBENOS
        </h3>
        <p>
          Empresa de software con experiencia. Soluciones a medida. Solicita un
          presupuesto sin compromiso.
        </p>
      </div>
      <div>
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
          <Button color='#0096d5' texto='Enviar'/>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
