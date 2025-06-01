import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Sesion from "../pages/Sesion";
import Productos from "../pages/Productos";
import Terraza from "../pages/Terraza";
import Barra from "../pages/Barra";
import InicioSesion from "../pages/InicioSesion";
import AnyadirProductos from "../pages/AnyadirProductos";

/**
 * @component Rutas
 * @description Componente que define la estructura de navegación de la aplicación.
 * Configura todas las rutas disponibles y sus componentes correspondientes.
 * 
 * @routes
 * - / -> Página de inicio de sesión
 * - /pedidos -> Vista de pedidos
 * - /sesion -> Configuración de sesión
 * - /productos/:telefono -> Vista de productos con parámetro de teléfono
 * - /terraza -> Vista de terraza
 * - /barra -> Vista de barra
 * - /anyadirProductos -> Vista para agregar productos
 * 
 * @returns {JSX.Element} Retorna el componente de rutas con todas las rutas configuradas
 */
const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<InicioSesion />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/productos/:telefono" element={<Productos />} />
      <Route path="/terraza" element={<Terraza />} />
      <Route path="/barra" element={<Barra />} />
      <Route path="/anyadirProductos" element={<AnyadirProductos />} />
    </Routes>
  );
};

export default Rutas;
