import { AiFillLike } from "react-icons/ai";
import "./ventajas.css"

function Ventajas() {
  return (
    <div className="ventajas">
      <div className="ventajas__Description" data-aos="slip-up" data-aos-delay="500" data-aos-duration="5000" >
        <h2>VENTAJAS</h2>
        <p className="P">
          El desarrollo de programas a medida brinda soluciones que se ajustan a
          las exigencias de cada empresa y a los cambios que surgen con su
          crecimiento.
        </p>
      </div>

      <div className="ventajas__PrimerBloque">
        <article className="ventajas__PrimerBloque--Gastos" data-aos="zoom-out-left " data-aos-delay="200" data-aos-duration="5000">
          <AiFillLike />
          <h3 >MENOR GASTO </h3>
          <p>
            Poner en marcha un software a medida necesita de una buena inversión
            inicial, pero cuando comienza a trabajar se recupera lo invertido en
            poco tiempo. Los beneficios de optimizar procesos son enormes a
            largo plazo.
          </p>
        </article>
        <article className="ventajas__PrimerBloque--Tiempo" data-aos="zoom-out-right " data-aos-delay="200" data-aos-duration="5000">
          <AiFillLike />
          <h3>
            AHORRO DE TIEMPO{" "}
          </h3>
          <p>
            Un software personalizado es capaz de reducir a minutos una o varias
            tareas que antes llevaban días o semanas. La economía del tiempo
            supone un aumento considerable de la productividad.
          </p>
        </article>
      </div>

      <div className="ventajas__SegundoBloque">
        <article className="ventajas__SegundoBloque--Integracion" data-aos="zoom-out-left " data-aos-delay="300" data-aos-duration="5000">
          <AiFillLike />
          <h3>INTEGRACIÓN </h3>
          <p>
            El software a medida es una gran solución para la integración. Las
            empresas que utilizan varios programas pueden disfrutar de los
            beneficios de trabajar con una plataforma que integre múltiples
            procesos.
          </p>
        </article>
        <article className="ventajas__SegundoBloque--Flexibilidad" data-aos="zoom-out-right " data-aos-delay="300" data-aos-duration="5000">
          <AiFillLike />
          <h3>FLEXIBILIDAD</h3>
          <p>
            Los programas a medida pueden ser modificados de acuerdo a las
            necesidades de la empresa. El software evoluciona para satisfacer
            las nuevas demandas con un presupuesto inferior a la inversión
            inicial.
          </p>
        </article>
      </div>

    </div>
  );
}

export default Ventajas;
