
const BarraProductosParaPedido = ({ pedido }) => {
  if (!pedido) {
    return <div className="barraProductosPedido"></div>;
  }
  return (
    <>
      <div className="barraProductosPedido">{pedido.id}</div>
    </>
  );
};
export default BarraProductosParaPedido;
