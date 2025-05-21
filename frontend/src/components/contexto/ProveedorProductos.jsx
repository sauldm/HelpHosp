import { createContext, useEffect, useState } from "react";

const ContextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const respuesta = await fetch("/json/productos.json");
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
    <ContextoProductos.Provider value={productos}>
      {children}
    </ContextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { ContextoProductos };
