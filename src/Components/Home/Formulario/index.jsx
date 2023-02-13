import './Formulario.css';


function Formulario() {
  return (
    <div
      className="Formulario"
      style={{ backgroundColor: "#0096d5", height: "650px" }}
    >
      <div>
        <h3 style={{ position: "relative", top: "40px", textAlign: 'center'}}>¿NECESITAS AYUDA?</h3>
        <h3 style={{ color: "white",position: "relative", top: "40px", textAlign: 'center' }}>ESCRÍBENOS</h3>
        <p style={{ position: "relative", top: "40px", left: "350px" }}>
          Empresa de software con experiencia. Soluciones a medida. Solicita un
          presupuesto sin compromiso.
        </p>
      </div>
      <div>
        <form
          action=""
          style={{
            position: "relative",
            left: "500px",
            top: "100px",
            width: "500px",
            height: "300px",
          }}
        >
          <input
            type="text"
            placeholder="Nombre"
            style={{
            //   backgroundColor: "transparent",
            //   border: "none",
            //   width: "250px",
            //   marginTop: "40px",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            // style={{
            //   backgroundColor: "transparent",
            //   border: "none",
            //   width: "250px",
            //   marginTop: "40px",
            // }}
          />
          <input
            type="text"
            placeholder="Celular"
            // style={{
            //   backgroundColor: "transparent",
            //   border: "none",
            //   width: "250px",
            //   marginTop: "40px",
            // }}
          />
          <textarea
            placeholder="Mensaje"
          ></textarea>
           <button style={{position: 'relative', top: '20px', left: '150px'}}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
