const BarraProductosParaPedido = ({
  productosSeleccionados,
  setProductoPulsado,
}) => {
  if (!productosSeleccionados || productosSeleccionados.length === 0) {
    return <div className="barraProductosPedido">asd</div>;
  }
  return (
    <>
      <div className="barraProductosPedido">
        {productosSeleccionados.map((producto,index) => {
          return (
            <div
              className="productoPedido"
              key={index}
              onClick={() => {
                setProductoPulsado(producto);
                className === "productoPedido"
                  ? (className = "productoPedido pulsado")
                  : (className = "productoPedido");
              }}
            >
              {producto.nombre}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BarraProductosParaPedido;
