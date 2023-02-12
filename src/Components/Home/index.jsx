import Headers from "./Headers/index.jsx";
import Banner from "./Banner/index.jsx";
import SoftwareInfo from "./SoftwareInfo/index.jsx";
import Agencia from "./Agencia/index.jsx";
import Ventajas from './Ventajas/index.jsx';
import Portfolio from "./Portfolio/index.jsx";
import Formulario from './Formulario/index.jsx';
import Footer from './Footer/index.jsx';


function App() {
  return (
    <div className="App">
      <Headers />
      <Banner />
      <SoftwareInfo />
      <Agencia />
      <Portfolio />
      <Ventajas />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
