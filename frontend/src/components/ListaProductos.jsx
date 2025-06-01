import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

/**
 * @component ListaProductos
 * @description Componente que muestra una cuadrícula de productos disponibles para selección.
 * Cada producto se muestra como una tarjeta con nombre y precio, y puede ser seleccionado
 * haciendo clic. Utiliza el contexto de productos para gestionar el estado de los productos
 * seleccionados.
 * 
 * @context ContextoProductos
 * @property {Array} productosASeleccionar - Lista de productos disponibles para selección
 * @property {Function} setProductosSeleccionados - Función para actualizar la lista de productos seleccionados
 * 
 * @returns {JSX.Element} Retorna una cuadrícula de tarjetas de productos seleccionables
 */
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
