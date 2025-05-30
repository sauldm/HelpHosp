import Empleados from "../components/Empleados";
import ListaPedidos from "../components/ListaPedidos";
import ListaProductos from "../components/ListaProductos";
import NavbarGeneral from "../components/NavbarGeneral";

function AnyadirProductos() {

  return (
    <>
      <div className="body">
        <NavbarGeneral />
        <div className="contenido">
          <ListaProductos />
        </div>
        <Empleados />
      </div>
    </>
  );
}

export default AnyadirProductos;
