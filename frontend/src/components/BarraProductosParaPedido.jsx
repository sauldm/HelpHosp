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
