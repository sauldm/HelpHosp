import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";

const Sesion = () => {
  //Implementar si es repartidor o no, si lo es le seldrá la cuenta tanto en la pantalla como impresa
  return (
    <div className="body">
      <NavbarGeneral />
      <div className="contenido">
        <p>Sesion</p>
      </div>
      <Empleados />
    </div>
  );
};

export default Sesion;
