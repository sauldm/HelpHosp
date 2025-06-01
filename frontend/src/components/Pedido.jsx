import { useContext } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";

const Pedido = () => {
  const { pedido } = useContext(ContextoPedidos);

  return (
    <div>
      <p>ID: {pedido.id}</p>
      <p>Teléfono: {pedido.cliente_telefono}</p>
      <p>Domicilio: {pedido.cliente.domicilio}</p>
      <p>Forma de encargo: {pedido.formaDeEncargo}</p>
      Productos:{" "}
      {pedido.productos.map((producto, index) => {
        return (
          <p key={index}>
            {producto.pivot.cantidad} {producto.nombre}{" "}
            {producto.pivot.observaciones} - 
            {producto.precio * producto.pivot.cantidad} €
          </p>
        );
      })}
      Total: {pedido.productos.reduce((valor,producto)=> valor + producto.precio * producto.pivot.cantidad, 0)} €
    </div>
  );
};

export default Pedido;
