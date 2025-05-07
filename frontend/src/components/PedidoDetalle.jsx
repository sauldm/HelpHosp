import { useLocation } from "react-router-dom";

const PedidoDetalle = () => {
  const location = useLocation();
  const { pedido } = location.state;
  return (
    <>
      <div className="pedidoDetalle">
        <p>ID: {pedido.id}</p>
        <p>Numero: {pedido.numero}</p>
      </div>
    </>
  );
};

export default PedidoDetalle;
