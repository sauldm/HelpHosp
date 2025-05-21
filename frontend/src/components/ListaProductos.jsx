import { useContext } from "react";
import { ContextoProductos } from "./contexto/ProveedorProductos";

const ListaProductos = ({ pedido }) => {
  const productos = useContext(ContextoProductos);
  return (
    <>
      {productos.map((producto, index) => (
        <div key={index}>
          <button
            onClick={() => {
              <></>;
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
