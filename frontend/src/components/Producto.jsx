const Producto = ({ producto }) => {
  return (
    <>
      <div className="producto">
        <div className="imgProducto"> {producto.nombre}</div>
        <p>{producto.nombre}</p>
      </div>
    </>
  );
};

export default Producto;
