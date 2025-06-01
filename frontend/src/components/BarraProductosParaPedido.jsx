import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

/**
 * @component BarraProductosParaPedido
 * @description Componente que muestra una barra lateral con los productos seleccionados
 * para un pedido. Permite seleccionar productos individuales para editarlos o eliminarlos,
 * y muestra las observaciones asociadas a cada producto.
 * 
 * @context ContextoProductos
 * @property {number} indiceProductoPulsado - Índice del producto actualmente seleccionado
 * @property {Function} setIndiceProductoPulsado - Función para actualizar el producto seleccionado
 * @property {Array} productosSeleccionados - Lista de productos seleccionados para el pedido
 * 
 * @returns {JSX.Element} Retorna una barra lateral con los productos seleccionados
 */
const BarraProductosParaPedido = () => {
  const {
    indiceProductoPulsado,
    setIndiceProductoPulsado,
    productosSeleccionados,
  } = useContext(ContextoProductos);

  if (!productosSeleccionados || productosSeleccionados.length === 0) {
    return <div className="barraProductosPedido">asd</div>;
  }

  return (
    <>
      <div className="barraProductosPedido">
        {productosSeleccionados.map((producto, index) => {
          return (
            <div
              className={`productoPedido${
                indiceProductoPulsado === index ? " pulsado" : ""
              }`}
              key={index}
              onClick={() => {
                setIndiceProductoPulsado(index);
              }}
            >
              {producto.nombre}
              <p>
                {producto.observaciones ?? producto.pivot?.observaciones ?? ""}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BarraProductosParaPedido;
