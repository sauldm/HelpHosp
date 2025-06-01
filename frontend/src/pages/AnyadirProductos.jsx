import { useContext, useState } from "react";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import ModalCrearProducto from "../components/ModalCrearProducto";
import NavbarGeneral from "../components/NavbarGeneral";
import ContextoProductos from "../components/contexto/ContextoProductos";

function AnyadirProductos() {
  const { crearProducto } = useContext(ContextoProductos);
  const [isModalProductoOpen, setisModalProductoOpen] = useState(false);

  return (
    <>
      <div className="body">
        <NavbarGeneral />
        <div className="contenido">
          <button
            onClick={() => setisModalProductoOpen(true)}
          >
            Añadir Producto
          </button>
          <ListaProductos />
        </div>
        <Empleados />
         <ModalCrearProducto
        isModalProductoOpen={isModalProductoOpen}
        setisModalProductoOpen={setisModalProductoOpen}
        alEnviar={crearProducto}
      />
      </div>
    </>
  );
}

export default AnyadirProductos;
