import { useEffect, useState } from "react";
import data from "../json/productos.json";
import Producto from "./Producto";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setProductos(data);
  }, []);
  return (
    <>
      {productos.map((producto, index) => (
        <Producto producto={producto}></Producto>
      ))}
    </>
  );
};

export default ListaProductos;
