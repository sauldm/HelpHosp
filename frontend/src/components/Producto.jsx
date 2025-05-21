const Producto = ({ producto }) => {
  return (
    <>
      <div className="producto">
        <div className="imgProducto"> {producto.nombre}</div>
      </div>
    </>
  );
};

export default Producto;
