import "./formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <div className="formulario__Invitacion">
        <h3>
          ¿NECESITAS AYUDA?
        </h3>
        <h3>
          ESCRÍBENOS
        </h3>
        <p>
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
          <button className="btn third color">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
