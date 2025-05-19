import ListaProductos from "../components/ListaProductos";

const Productos = () => {
  return (
    <>
      <div className="productos">
        <button
          className="btnProducto"
          onClick={() => setisModalProductoOpen(true)}
        >
          +
        </button>
        <ListaProductos />
      </div>
    </>
  );
};

export default Productos;
