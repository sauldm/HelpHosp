import { createContext, useEffect, useState } from "react";

const ContextoPedidos = createContext();

const ProveedorPedidos = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const getPedidos = async () => {
      const respuesta = await fetch("/json/pedidos.json");
      if (respuesta.ok) {
        const data = await respuesta.json();
        setPedidos(data);
      } else {
        console.log("error");
      }
    };
    getPedidos();
  }, []);

  return (
    <>
      <ContextoPedidos.Provider value={pedidos}>
        {children}
      </ContextoPedidos.Provider>
    </>
  );
};

export default ProveedorPedidos;
export { ContextoPedidos };
