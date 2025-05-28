import { useContext, useEffect, useState } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import ModalCrearCliente from "../components/ModalCrearCliente";
import ContextoCliente from "../components/contexto/ContextoCliente";

const Productos = () => {
  const { clientes } = useContext(ContextoCliente);
  const { telefono } = useParams();
  const [cliente, setCliente] = useState();

  useEffect(() => {
    setCliente(clientes.find((cliente) => cliente.telefono == telefono));
  }, [clientes, telefono]);

  if (clientes.length === 0) {
    return (
      <div className="body">
        <Cargando />
      </div>
    );
  }

  return (
    <div className="body">
      <ModalCrearCliente telefono={telefono} />
      <BarraProductosParaPedido cliente={cliente} />
      <div className="contenido">
        <ListaProductos />
      </div>
      <Empleados />
    </div>
  );
};

export default Productos;
