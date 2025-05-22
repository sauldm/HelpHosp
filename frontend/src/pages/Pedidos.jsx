import Empleados from "../components/Empleados";
import ListaPedidos from "../components/ListaPedidos";
import NavbarGeneral from "../components/NavbarGeneral";

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
