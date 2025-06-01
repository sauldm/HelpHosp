import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Contenido from "./components/Contenido";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProveedorProductos from "./components/contexto/ProveedorProductos";
import ProveedorPedidos from "./components/contexto/ProveedorPedidos";
import ProveedorCliente from "./components/contexto/ProveedorCliente";

/**
 * @component App
 * @description Componente principal de la aplicación que configura el enrutamiento y la estructura básica.
 * Envuelve la aplicación con los proveedores de contexto necesarios para la gestión de productos,
 * pedidos y clientes. Define la estructura básica de la página con encabezado, contenido y pie de página.
 * 
 * @returns {JSX.Element} Retorna el componente principal de la aplicación con todos los proveedores
 * de contexto y la estructura básica de la página.
 */
function App() {
  return (
    <ProveedorCliente>
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
    </ProveedorCliente>
  );
}

export default App;
