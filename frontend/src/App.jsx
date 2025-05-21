import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Empleados from "./components/Empleados";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProveedorProductos from "./components/contexto/ProveedorProductos";
import ProveedorPedidos from "./components/contexto/ProveedorPedidos";

function App() {
  return (
    <ProveedorPedidos>
      <ProveedorProductos>
        <div className="pagina">
          <Router>
            <Header />
            <div className="body">
              <Navbar />
              <Contenido />
              <Empleados />
            </div>
            <Footer />
          </Router>
        </div>
      </ProveedorProductos>
    </ProveedorPedidos>
  );
}

export default App;
