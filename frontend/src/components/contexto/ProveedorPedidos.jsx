import { useEffect, useState } from "react";
import ContextoPedidos from "./ContextoPedidos";

const ProveedorPedidos = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);
  const [pedido, setPedido] = useState();
  const API_URL = `${import.meta.env.VITE_API_URL}/pedidos`;

  const getPedidos = async () => {
    console.log(API_URL);
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setPedidos(data);
      console.log("Pedidos obtenidos:", data);
    } else {
      console.log("error al obtener pedidos");
    }
  };

  const getPedido = async (id) => {
    const respuesta = await fetch(API_URL + "/" + id);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setPedido(data);
      console.log("Pedido obtenido:", data);
    } else {
      console.log("error al obtener pedido");
    }
  };

  const crearPedido = async (pedido) => {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    })
      .then(() => getPedidos())
      .catch((error) => console.error("Error al crear pedido:", error));
  };

  const modificarPedido = (pedido) => {
    fetch(API_URL + "/" + pedido.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido),
    })
      .then(() => getPedidos())
      .catch((error) => console.error("Error al modificar pedido:", error));
  };

  const eliminarPedido = (pedido) => {
    fetch(API_URL + "/" + pedido.id, { method: "DELETE" })
      .then(() => getPedidos())
      .catch((error) => console.error("Error al eliminar pedido:", error));
  };

  const eliminarPedidos = async () => {
    await fetch(API_URL, { method: "DELETE" })
      .then(() => getPedidos())
      .catch((error) => console.error("Error al eliminar pedidos:", error));
  };

  useEffect(() => {
    getPedidos();
  }, []);

  const exportacion = {
    getPedidos,
    getPedido,
    crearPedido,
    modificarPedido,
    eliminarPedido,
    eliminarPedidos,
    pedidos,
    pedido,
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
