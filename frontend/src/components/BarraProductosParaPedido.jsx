import { useContext } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const BarraProductosParaPedido = () => {
  const {
    indiceProductoPulsado,
    setIndiceProductoPulsado,
    productosSeleccionados,
  } = useContext(ContextoProductos);

  if (!productosSeleccionados || productosSeleccionados.length === 0) {
    return <div className="barraProductosPedido">asd</div>;
  }

  function hayObservaciones(producto) {
    try {
      if (producto.pivot.observaciones) {
        return (
          <span className="observaciones">{producto.pivot.observaciones}</span>
        );
      }
    } catch (error) {
      return null;
    }
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
              {hayObservaciones(producto)}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BarraProductosParaPedido;
