import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const ListaProductos = ({ pedido }) => {
  const { productos } = useContext(ContextoProductos);
  console.log(productos);

  return (
    <div className="productos">
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
    </div>
  );
};

export default ListaProductos;
