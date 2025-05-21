import { useContext } from "react";
import Producto from "./Producto";
import { ContextoProductos } from "./contexto/ProveedorProductos";
import AnyadirProductoAPedido from "./AnyadirProductoAPedido";

const ListaProductos = () => {
  const productos = useContext(ContextoProductos);

  return (
    <>
      {productos.map((producto, index) => (
        <button onClick={() => <AnyadirProductoAPedido producto={producto} />}>
          <Producto key={index} producto={producto}></Producto>
        </button>
      ))}
    </>
  );
};

export default ListaProductos;
