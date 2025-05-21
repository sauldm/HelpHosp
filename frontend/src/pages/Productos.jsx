import { useParams } from "react-router-dom";
import ListaProductos from "../components/ListaProductos";
import { useContext } from "react";
import { ContextoPedidos } from "../components/contexto/ProveedorPedidos";

const Productos = () => {
  const pedidos = useContext(ContextoPedidos);
  const { telefono } = useParams();
  const pedido = pedidos.telefono == telefono;

  return (
    <>
      <div className="productos">
        <ListaProductos pedido={pedido} />
      </div>
    </>
  );
};

export default Productos;
