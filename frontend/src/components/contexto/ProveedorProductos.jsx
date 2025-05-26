import { createContext, useEffect, useState } from "react";

const ContextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const API_URL = "http://127.0.0.1:8000/api/productos";

  const getProductos = async () => {
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos(data);
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
        previo.map(productoModificado.id == producto.id)
      );
    } else console.error("Error al modificar producto");
  };

  const eliminarProducto = async (producto) => {
    await fetch(API_URL + "/" + id, { method: "DELETE" });
    setPedidos((previo) => previo.filter((p) => p.id !== producto.id));
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
  };
  return (
    <ContextoProductos.Provider value={exportacion}>
      {children}
    </ContextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { ContextoProductos };
