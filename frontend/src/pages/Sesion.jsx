import { useContext } from "react";
import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";
import ContextoPedidos from "../components/contexto/ContextoPedidos";
import { useNavigate } from "react-router-dom";

/**
 * @component Sesion
 * @description Página de gestión de sesión que permite al usuario cerrar su sesión
 * y limpiar los pedidos actuales. Al cerrar sesión, el usuario es redirigido a la
 * página de inicio de sesión.
 * 
 * @context ContextoPedidos
 * @property {Function} eliminarPedidos - Función para eliminar todos los pedidos al cerrar sesión
 * 
 * @returns {JSX.Element} Retorna la página de sesión con el botón de cierre de sesión
 */
const Sesion = () => {
  const { eliminarPedidos } = useContext(ContextoPedidos);
  const navegar = useNavigate();
  return (
    <div className="body">
      <NavbarGeneral />
      <div className="contenido">
        <button
          onClick={() => {
            eliminarPedidos();
            navegar("/");
          }}
        >
          Cerrar Sesión
        </button>
      </div>
      <Empleados />
    </div>
  );
};

export default Sesion;
