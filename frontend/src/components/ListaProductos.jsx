import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const ListaProductos = () => {
  const { productosASeleccionar, setProductosSeleccionados } =
    useContext(ContextoProductos);

  return (
    <div className="productos-grid">
      {productosASeleccionar.map((producto, index) => (
        <div 
          key={index} 
          className="producto-card"
          onClick={() => setProductosSeleccionados((prev) => [...prev, producto])}
        >
          <div className="producto-imagen">{producto.nombre}</div>
          <div className="producto-info">
            <div className="producto-nombre">{producto.nombre}</div>
            <div className="producto-precio">{producto.precio}€</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListaProductos;
