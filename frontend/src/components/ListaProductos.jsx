import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContextoProductos } from "./contexto/ProveedorProductos";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const ListaProductos = ({ pedido }) => {
  const productos = useContext(ContextoProductos);

  if (productos.length == 0) {
    return <p>Cargando</p>;
  }

  return (
    <div className="productos">
      {productos.map((producto, index) => (
        <div key={index}>
          <button
            onClick={() => {
              <>
                {pedido.productos.push(producto)}
                {console.log(pedido)}
              </>;
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
