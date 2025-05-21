import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const BarraProductosParaPedido = () => {
  const pedidos = useContext(ContextoPedidos);
  console.log(pedidos);
  const localizacion = useLocation();
  const { search } = localizacion;
  const params = new URLSearchParams(search);
  const telefono = params.get("telefono");
  const pedido = pedidos.find((pedido) => pedido.telefono == telefono);

  return (
    <>
      <div className="barraProductosPedido">
        {pedido.productos.map((producto) => (
          <p key={producto.nombre}>{producto.nombre}</p>
        ))}
      </div>
    </>
  );
};
export default BarraProductosParaPedido;
