import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";

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
