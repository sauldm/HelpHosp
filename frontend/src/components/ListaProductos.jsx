import { useEffect, useState } from "react";
import Producto from "./Producto";

const ListaProductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const respuesta = await fetch("../../json/productos.json");
      if (respuesta.ok) {
        const data = await respuesta.json();
        setProductos(data);
      } else {
        console.log("error");
      }
    };
    fetchProductos();
  }, []);
  return (
    <>
      {productos.map((producto, index) => (
        <Producto key={index} producto={producto}></Producto>
      ))}
    </>
  );
};

export default ListaProductos;
