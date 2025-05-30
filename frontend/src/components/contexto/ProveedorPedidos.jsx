import { useEffect, useState } from "react";
import ContextoPedidos from "./ContextoPedidos";

const ProveedorPedidos = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);
  const API_URL = `${import.meta.env.VITE_API_URL}/pedidos`;

  const getPedidos = async () => {
  console.log(API_URL)
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setPedidos(data);
      console.log("Pedidos obtenidos:", data);
    } else {
      console.log("error al obtener pedidos");
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
        previo.map((pedidoModificado) => pedidoModificado.id == data.id)
      );
    } else console.error("Error al modificar pedido");
  };

  const eliminarPedido = async (pedido) => {
    await fetch(API_URL + "/" + pedido.id, { method: "DELETE" });
    setPedidos((previo) =>
      previo.filter((pedidoEliminado) => pedidoEliminado.id !== pedido.id)
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
