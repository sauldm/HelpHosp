import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";

/**
 * @component Terraza
 * @description Página que representa la vista de terraza del establecimiento.
 * Incluye la barra de navegación general, un botón para agregar nuevos elementos
 * (mesas o pedidos) y el componente de selección de empleados. Esta página está
 * diseñada para gestionar los pedidos y operaciones relacionadas con la terraza.
 * 
 * @returns {JSX.Element} Retorna la página de terraza con sus controles y componentes
 */
const Terraza = () => {
  return (
    <>
      <div className="body">
        <NavbarGeneral />
        <div className="contenido">
          <button>+</button>
        </div>
        <Empleados />
      </div>
    </>
  );
};

export default Terraza;
