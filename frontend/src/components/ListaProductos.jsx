import { useContext, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const ListaProductos = ({ setProductosSeleccionados }) => {
  const { productos } = useContext(ContextoProductos);

  return (
    <div className="productos">
      {productos.map((producto, index) => (
        <div key={index}>
          <button
            onClick={() => {
              <>{setProductosSeleccionados((prev) => [...prev, producto])}</>;
            }}
          >
            <p>{producto.nombre}</p>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
