import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";

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
