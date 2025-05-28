import { useContext } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import ContextoPedidos from "../components/contexto/ContextoPedidos";
import ContextoCliente from "../components/contexto/ContextoCliente";
import CrearCliente from "../components/CrearCliente";

const Productos = () => {
  const { pedidos } = useContext(ContextoPedidos);
  const { clientes } = useContext(ContextoCliente);
  const { telefono } = useParams();

  function isTelefonoDeCliente() {
    return clientes.find((cliente) => cliente.telefono == telefono);
  }

  if (!isTelefonoDeCliente()) {
    return <CrearCliente telefono={telefono} />;
  }

  if (pedidos.length == 0) {
    return (
      <div className="body">
        <Cargando />
      </div>
    );
  }
  const pedido = pedidos.find((pedido) => pedido.cliente_telefono == telefono);

  return (
    <div className="body">
      <BarraProductosParaPedido pedido={pedido} />
      <div className="contenido">
        <ListaProductos pedido={pedido} />
      </div>
      <Empleados />
    </div>
  );
};

export default Productos;
