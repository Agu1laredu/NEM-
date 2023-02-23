import "./Infosoft.css";
import { GoVerified } from "react-icons/go";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();




function SoftwareInfo() {
  return (
    <div className="softwareInfo">
      <div data-aos="fade-up">
        <div className="softwareInfo__Desciption ">
          <h1>SOFTWARE</h1>
          <p>
            Años de experiencia que nos permiten brindar soluciones a medida para
            empresas, marcas, pymes y emprendedores.
          </p>
        </div>
      </div>


      <div className="softwareInfo__ERPyCRM ">
        <article className="softwareInfo__ERPyCRM--ERP" data-aos="flip-left" data-aos-delay="100" data-aos-duration="5000">
          <GoVerified />
          <h3> SOFTWARE ERP </h3>
          <p>
            Automatiza los procesos internos reduciendo los costos con un
            sistema de gestión que se adapte para impulsar la productividad.
          </p>
        </article>
        <article className="softwareInfo__ERPyCRM--CRM" data-aos="flip-left" data-aos-delay="100" data-aos-duration="5000">

          <GoVerified />
          <h3> SOFTWARE CRM </h3>
          <p>
            Incrementa las ventas con un sistema enfocado en lo que necesitan
            los vendedores para establecer vínculos adecuados con los clientes.
          </p>

        </article>
      </div>

      <div className="softwareInfo__SGAyRRHH">
        <article className="softwareInfo__SGAyRRHH--SGA" data-aos="flip-up" data-aos-delay="200" data-aos-duration="5000">
          <GoVerified
          />
          <h3>SOFTWARE SGA </h3>
          <p>
            Controla tu almacén de forma ordenada teniendo información
            actualizada del stock de productos para prever reposiciones y
            agilizar los envíos.
          </p>
        </article>
        <article className="softwareInfo__SGAyRRHH--RRHH" data-aos="flip-up" data-aos-delay="200" data-aos-duration="5000">
          <GoVerified />

          <h3>SOFTWARE RRHH</h3>
          <p>
            Mejora el rendimiento del personal atendiendo sus necesidades con un
            programa de recursos humanos acorde a lo que requiere cada sector.
          </p>
        </article>
      </div>

      <div className="softwareInfo__MEDIDAyBOT">
        <article className="softwareInfo__MEDIDAyBOT--MEDIA" data-aos="flip-left" data-aos-delay="300" data-aos-duration="5000">
          <GoVerified />
          <h3>APP A MEDIDA </h3>
          <p>
            Utiliza una aplicación móvil para fidelizar clientes con contenido
            innovador, promociones, atención personalizada y push notifications.
          </p>
        </article>
        <article
          className="softwareInfo__MEDIDAyBOT--BOT" data-aos="flip-left" data-aos-delay="300" data-aos-duration="5000"> 
          <GoVerified />
          <h3>CHAT BOT</h3>
          <p>
            Optimiza la comunicación con inteligencia artificial para brindar
            atención al cliente las veinticuatro horas o mejorar las relaciones
            dentro de la empresa.
          </p>
        </article>
      </div>

    </div>
  );
}

export default SoftwareInfo;
