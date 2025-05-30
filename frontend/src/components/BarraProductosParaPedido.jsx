import { useContext, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const BarraProductosParaPedido = () => {
  const [productoPulsado, setProductoPulsado] = useState();
  const { productosSeleccionados } = useContext(ContextoProductos);

  if (!productosSeleccionados || productosSeleccionados.length === 0) {
    return <div className="barraProductosPedido">asd</div>;
  }
  return (
    <>
      <div className="barraProductosPedido">
        {productosSeleccionados.map((producto, index) => {
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
