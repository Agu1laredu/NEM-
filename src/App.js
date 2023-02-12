import Headers from "./Components/Headers/index.jsx";
import Banner from "./Components/Banner/index.jsx";
import SoftwareInfo from "./Components/SoftwareInfo/index.jsx";
import Agencia from "./Components/Agencia/index.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Headers />
      <Banner />
      <SoftwareInfo />
      <Agencia />
    </div>
  );
}

export default App;
