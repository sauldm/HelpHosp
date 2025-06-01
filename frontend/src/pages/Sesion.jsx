import { useContext } from "react";
import Empleados from "../components/Empleados";
import NavbarGeneral from "../components/NavbarGeneral";
import ContextoPedidos from "../components/contexto/ContextoPedidos";
import { useNavigate } from "react-router-dom";

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
