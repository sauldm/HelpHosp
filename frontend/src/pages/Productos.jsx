import { useContext } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { ContextoPedidos } from "../components/contexto/ProveedorPedidos";
import { useParams } from "react-router-dom";

const Productos = () => {
  const pedidos = useContext(ContextoPedidos);
  const { telefono } = useParams();
  console.log(telefono + pedidos);

  if (pedidos.length == 0) {
    return <p>Cargando</p>;
  }
  const pedido = pedidos.find((pedido) => pedido.telefono == telefono);

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
