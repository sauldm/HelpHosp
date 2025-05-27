import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProveedorProductos from "./components/contexto/ProveedorProductos";
import ProveedorPedidos from "./components/contexto/ProveedorPedidos";

function App() {
  return (
    <ProveedorPedidos>
      <ProveedorProductos>
        <Router>
          <div className="pagina">
            <Header />
            <Contenido />
            <Footer />
          </div>
        </Router>
      </ProveedorProductos>
    </ProveedorPedidos>
  );
}

export default App;
