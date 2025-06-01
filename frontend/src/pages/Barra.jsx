import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";

/**
 * @component Barra
 * @description Página que representa la vista de barra del establecimiento.
 * Incluye la barra de navegación general y el componente de selección de empleados.
 * Esta página está diseñada para gestionar los pedidos y operaciones relacionadas
 * con la barra del establecimiento.
 * 
 * @returns {JSX.Element} Retorna la página de barra con navegación y selección de empleados
 */
const Barra = () => {
  return (
    <div className="body">
      <NavbarGeneral />
      <div className="contenido">Barra</div>
      <Empleados />
    </div>
  );
};

export default Barra;
