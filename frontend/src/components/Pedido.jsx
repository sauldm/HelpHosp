import { useContext } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";

const Pedido = () => {
  const { pedido } = useContext(ContextoPedidos);
  const total = pedido.productos.reduce(
    (valor, producto) => valor + producto.precio * producto.pivot.cantidad,
    0
  );

  return (
    <div className="pedido-detalle">
      <div className="pedido-info">
        <div className="pedido-header">
          <h3>Información del Pedido</h3>
          <span className="pedido-id">#{pedido.id}</span>
        </div>
        
        <div className="pedido-datos">
          <div className="dato-grupo">
            <span className="dato-label">Cliente</span>
            <span className="dato-valor">{pedido.cliente.nombre}</span>
          </div>
          <div className="dato-grupo">
            <span className="dato-label">Teléfono</span>
            <span className="dato-valor">{pedido.cliente_telefono}</span>
          </div>
          <div className="dato-grupo">
            <span className="dato-label">Domicilio</span>
            <span className="dato-valor">{pedido.cliente.domicilio}</span>
          </div>
          <div className="dato-grupo">
            <span className="dato-label">Forma de encargo</span>
            <span className="dato-valor">{pedido.formaDeEncargo}</span>
          </div>
        </div>
      </div>

      <div className="pedido-productos">
        <h3>Productos</h3>
        <div className="productos-lista">
          {pedido.productos.map((producto, index) => (
            <div key={index} className="producto-item">
              <div className="producto-info">
                <span className="producto-cantidad">{producto.pivot.cantidad}x</span>
                <span className="producto-nombre">{producto.nombre}</span>
                {producto.pivot.observaciones && (
                  <span className="producto-obs">{producto.pivot.observaciones}</span>
                )}
              </div>
              <span className="producto-precio">
                {(producto.precio * producto.pivot.cantidad).toFixed(2)} €
              </span>
            </div>
          ))}
        </div>
        
        <div className="pedido-total">
          <span>Total</span>
          <span>{total.toFixed(2)} €</span>
        </div>
      </div>
    </div>
  );
};

export default Pedido;
