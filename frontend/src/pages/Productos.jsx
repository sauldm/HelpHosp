import { useContext, useEffect, useState } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import ModalCrearCliente from "../components/ModalCrearCliente";
import ContextoCliente from "../components/contexto/ContextoCliente";
import HeaderProductos from "../components/HeaderProductos";
import ContextoProductos from "../components/contexto/ContextoProductos";

const Productos = () => {
  const { setProductosSeleccionados } = useContext(ContextoProductos);
  const { clientes } = useContext(ContextoCliente);
  const { telefono } = useParams();
  const [cliente, setCliente] = useState();
  useEffect(() => {
    setCliente(clientes.find((cliente) => cliente.telefono == telefono));
  }, [clientes, telefono]);
  const [nuevoCliente, setNuevoCliente] = useState();

 

  function siHayClientes() {
    return (
      <>
        <ListaProductos />
        <ModalCrearCliente telefono={telefono} alEnviar={setNuevoCliente}/>
      </>
    );
  }
  useEffect(() => {
    setProductosSeleccionados([]);
  }, []);

  function existeClientesYProductos() {
    return clientes.length > 0;
  }

  return (
    <div className="pagina">
      <HeaderProductos cliente={cliente} nuevoCliente={nuevoCliente}/>

      <div className="body">
        <BarraProductosParaPedido />
        <div className="contenido">
          {!existeClientesYProductos() ? <Cargando /> : siHayClientes()}
        </div>
        <Empleados />
      </div>
    </div>
  );
};

export default Productos;
