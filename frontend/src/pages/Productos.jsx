import AnyadirProducto from "../components/AnyadirProducto";
import ListaProductos from "../components/ListaProductos";

const Productos = () => {
  let producto = {
    nombre: "york",
    precio: 6.85,
  };
  return (
    <>
      <div className="productos">
        <button className="btnProducto">+</button>
        <ListaProductos />
      </div>
    </>
  );
};

export default Productos;
