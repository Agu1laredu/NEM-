import Headers from "../../Components/Headers/index.jsx";
import Banner from "./Banner/index.jsx";
import SoftwareInfo from "./SoftwareInfo/index.jsx";
import Agencia from "./Agencia/index.jsx";
import Ventajas from './Ventajas/index.jsx';
import Formulario from '../../Components/Formulario/index.jsx';
import Footer from '../../Components/Footer/index.jsx';
import NoTransitionExample from "./Portfolio/index.jsx";


function App() {
  return (
    <div className="App">
      <Headers />
      <Banner />
      <SoftwareInfo />
      <Agencia />
      <NoTransitionExample/>
      <Ventajas />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
