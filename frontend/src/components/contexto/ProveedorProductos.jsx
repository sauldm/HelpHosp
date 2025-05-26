import { createContext, useEffect, useState } from "react";

const ContextoProductos = createContext();

const ProveedorProductos = ({ children }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      const respuesta = await fetch("http://127.0.0.1:8000/api/productos");
      if (respuesta.ok) {
        const data = await respuesta.json();
        setProductos(data);
      } else {
        console.log("error");
      }
    };
    getProductos();
  }, []);

  return (
    <ContextoProductos.Provider value={productos}>
      {children}
    </ContextoProductos.Provider>
  );
};

export default ProveedorProductos;
export { ContextoProductos };
