import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContextoProductos } from "./contexto/ProveedorProductos";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const ListaProductos = () => {
  const pedidos = useContext(ContextoPedidos);
  const productos = useContext(ContextoProductos);
  const localizacion = useLocation();
  const { search } = localizacion;

  const params = new URLSearchParams(search);
  const telefono = params.get("telefono");
  const pedido = pedidos.find((pedido) => pedido.telefono == telefono);

  return (
    <>
      {productos.map((producto, index) => (
        <div key={index}>
          <button
            onClick={() => {
              <>{pedido.productos.push(producto)}</>;
            }}
          >
            <p>{producto.nombre}</p>
          </button>
        </div>
      ))}
    </>
  );
};

export default ListaProductos;
