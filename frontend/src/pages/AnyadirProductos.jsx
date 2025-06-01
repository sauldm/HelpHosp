import { useContext, useState } from "react";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import ModalCrearProducto from "../components/ModalCrearProducto";
import NavbarGeneral from "../components/NavbarGeneral";
import ContextoProductos from "../components/contexto/ContextoProductos";

/**
 * @component AnyadirProductos
 * @description Página que permite la gestión de productos, incluyendo la visualización
 * de productos existentes y la capacidad de añadir nuevos productos. Integra un modal
 * para la creación de productos y muestra la lista de productos actual.
 * 
 * @context ContextoProductos
 * @property {Function} crearProducto - Función para crear un nuevo producto
 * 
 * @returns {JSX.Element} Retorna la página de gestión de productos
 */
function AnyadirProductos() {
  const { crearProducto } = useContext(ContextoProductos);
  /**
   * @state {boolean} isModalProductoOpen - Controla la visibilidad del modal de creación de productos
   */
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
