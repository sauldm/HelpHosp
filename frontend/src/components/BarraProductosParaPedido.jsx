const BarraProductosParaPedido = ({ pedido }) => {
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
