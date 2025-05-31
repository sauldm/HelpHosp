import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const ListaProductos = () => {
  const { productosASeleccionar, setProductosSeleccionados } =
    useContext(ContextoProductos);

    

  return (
    <div className="productos">
      {productosASeleccionar.map((producto, index) => (
        <div key={index}>
          <button
            onClick={() =>
              setProductosSeleccionados((prev) => [...prev, producto])
            }
          >
            <p>{producto.nombre}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
