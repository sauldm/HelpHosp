const BarraProductosParaPedido = ({ cliente }) => {
  if (!cliente) {
    return <div className="barraProductosPedido">asd</div>;
  }
  return (
    <>
      <div className="barraProductosPedido">{cliente.id}</div>
    </>
  );
};
export default BarraProductosParaPedido;
