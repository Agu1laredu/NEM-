import Headers from "../../Components/Headers/index.jsx";
import Banner from "./Components/BannerPortfolio/index.jsx";
import Ventajas from "./Components/Ventajas/index.jsx";
import Formulario from "./Components/Formulario/index.jsx";
import Footer from "../../Components/Footer/index.jsx";

function App() {
  return (
    <div className="App" style={{backgroundColor: "·f7f7f7"}}>
      <Headers />
      <Banner />
      <Ventajas />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
