import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Empleados from "./components/Empleados";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProveedorProductos from "./components/contexto/ProveedorProductos";

function App() {
  return (
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
  );
}

export default App;
