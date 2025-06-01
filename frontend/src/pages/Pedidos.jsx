import Empleados from "../components/Empleados";
import ListaPedidos from "../components/ListaPedidos";
import NavbarGeneral from "../components/NavbarGeneral";

/**
 * @component Pedidos
 * @description Página principal de gestión de pedidos. Muestra una lista de todos
 * los pedidos activos y permite su gestión. Incluye la barra de navegación general
 * y el componente de selección de empleados para asignar pedidos.
 * 
 * @returns {JSX.Element} Retorna la página de pedidos con la lista de pedidos y controles
 */
function Pedidos() {
  return (
    <>
      <div className="body">
        <NavbarGeneral />
        <div className="contenido">
          <ListaPedidos />
        </div>
        <Empleados />
      </div>
    </>
  );
}

export default Pedidos;
