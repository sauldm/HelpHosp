import { useEffect, useState } from "react";
import ContextoProductos from "./ContextoProductos";

const ProveedorProductos = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const API_URL = `${import.meta.env.VITE_API_URL}/productos`;

  const getProductos = async () => {
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos(data);
      console.log("Productos obtenidos:", data);
    } else {
      console.error("Error al obtener productos");
    }
  };

  const crearProducto = async (producto) => {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos((previo) => [...previo, data]);
    } else console.error("Error al crear producto");
  };

  const modificarProducto = async (producto) => {
    const respuesta = await fetch(API_URL + "/" + producto.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos((previo) =>
        previo.map((productoModificado) => productoModificado.id == data.id)
      );
    } else console.error("Error al modificar producto");
  };

  const eliminarProducto = async (producto) => {
    await fetch(API_URL + "/" + producto.id, { method: "DELETE" });
    setPedidos((previo) =>
      previo.filter((productoEliminado) => productoEliminado.id !== producto.id)
    );
  };

  useEffect(() => {
    getProductos();
  }, []);

  const exportacion = {
    getProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto,
    productos,
    productosSeleccionados,
    setProductosSeleccionados,
  };
  return (
    <ContextoProductos.Provider value={exportacion}>
      {children}
    </ContextoProductos.Provider>
  );
};

export default ProveedorProductos;
