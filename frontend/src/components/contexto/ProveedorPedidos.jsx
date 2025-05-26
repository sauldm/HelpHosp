import { createContext, useEffect, useState } from "react";

const ContextoPedidos = createContext();

const ProveedorPedidos = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);
  const API_URL = "http://127.0.0.1:8000/api/pedidos";

  const getPedidos = async () => {
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setPedidos(data);
    } else {
      console.log("error");
    }
  };

  const crearPedido = async (pedido) => {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setPedidos((previo) => [...previo, data]);
    } else console.error("Error al crear pedido");
  };

  const modificarPedido = async (pedido) => {
    const respuesta = await fetch(API_URL + "/" + pedido.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos((previo) =>
        previo.map((pedidoModificado) => pedidoModificado.id == pedido.id)
      );
    } else console.error("Error al modificar pedido");
  };

  const eliminarPedido = async (pedido) => {
    await fetch(API_URL + "/" + pedido.id, { method: "DELETE" });
    setPedidos((previo) =>
      previo.filter((pedidoEliminado) => pedidoEliminado.id !== producto.id)
    );
  };

  useEffect(() => {
    getPedidos();
  }, []);

  const exportacion = {
    getPedidos,
    crearPedido,
    modificarPedido,
    eliminarPedido,
    pedidos,
  };

  return (
    <>
      <ContextoPedidos.Provider value={exportacion}>
        {children}
      </ContextoPedidos.Provider>
    </>
  );
};

export default ProveedorPedidos;
export { ContextoPedidos };
