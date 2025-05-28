import { useContext } from "react";
import ContextoCliente from "./contexto/ContextoCliente";
import CrearCliente from "./CrearCliente";

const ModalCrearCliente = ({ telefono }) => {
  const { clientes } = useContext(ContextoCliente);

  function isTelefonoDeCliente() {
    return clientes.some((cliente) => cliente.telefono == telefono);
  }

  if (!isTelefonoDeCliente()) {
    return <CrearCliente telefono={telefono} />;
  }

  return null;
};

export default ModalCrearCliente;
