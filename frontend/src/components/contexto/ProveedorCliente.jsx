import { useEffect, useState } from "react";
import ContextoCliente from "./ContextoCliente";

const ProveedorCliente = ({ children }) => {
  const [clientes, setClientes] = useState([]);
  const API_URL = `${import.meta.env.VITE_API_URL}/clientes`;

  const getClientes = async () => {
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setClientes(data);
      console.log("Clientes obtenidos:", data);
    } else {
      console.log("error al obtener clientes");
    }
  };

  const crearCliente = async (cliente) => {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cliente),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setClientes((previo) => [...previo, data]);
    } else console.error("Error al crear cliente");
  };

  const modificarCliente = async (cliente) => {
    const respuesta = await fetch(API_URL + "/" + cliente.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cliente),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setClientes((previo) =>
        previo.map((clienteModificado) => clienteModificado.id == data.id)
      );
    } else console.error("Error al modificar cliente");
  };

  const eliminarCliente = async (cliente) => {
    await fetch(API_URL + "/" + cliente.id, { method: "DELETE" });
    setClientes((previo) =>
      previo.filter((clienteEliminado) => clienteEliminado.id !== cliente.id)
    );
  };

  useEffect(() => {
    getClientes();
  }, []);

  const exportacion = {
    getClientes,
    crearCliente,
    modificarCliente,
    eliminarCliente,
    clientes,
  };

  return (
    <>
      <ContextoCliente.Provider value={exportacion}>
        {children}
      </ContextoCliente.Provider>
    </>
  );
};

export default ProveedorCliente;
