import Headers from "../../Components/Headers/index.jsx";
import Banner from "./Banner/index.jsx";
import SoftwareInfo from "./SoftwareInfo/index.jsx";
import Agencia from "./Agencia/index.jsx";
import Ventajas from "./Ventajas/index.jsx";
import Formulario from "../../Components/Formulario/index.jsx";
import Footer from "../../Components/Footer/index.jsx";
import NoTransitionExample from "./Portfolio/index.jsx";
import styled from "styled-components";

function App() {
  const ContainerAppHome = styled.div`
    min-width: 100%;
    overflow: hidden;
  `;

  return (
    <ContainerAppHome>
      <Headers />
      <Banner />
      <SoftwareInfo />
      <Agencia />
      <NoTransitionExample />
      <Ventajas />
      <Formulario />
      <Footer />
    </ContainerAppHome>
  );
}

export default App;
