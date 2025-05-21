import { useContext } from "react";
import Producto from "./Producto";
import { ContextoProductos } from "./contexto/ProveedorProductos";

const ListaProductos = () => {
  const productos = useContext(ContextoProductos);

  return (
    <>
      {productos.map((producto, index) => (
        <Producto key={index} producto={producto}></Producto>
      ))}
    </>
  );
};

export default ListaProductos;
