const BarraProductosParaPedido = ({ pedido }) => {
  if (!pedido) {
    return <div className="barraProductosPedido">asd</div>;
  }
  return (
    <>
      <div className="barraProductosPedido">{pedido.id}</div>
    </>
  );
};
export default BarraProductosParaPedido;
