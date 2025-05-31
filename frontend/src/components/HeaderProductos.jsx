import { useNavigate } from "react-router-dom";
import BuscarProducto from "./BuscarProducto";
import ModalFinalizarPedido from "./ModalFinalizarPedido";
import { useContext, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const HeaderProductos = ({ cliente, nuevoCliente }) => {
  const {productosSeleccionados,setProductosSeleccionados, productos, productoPulsado, setProductoPulsado} = useContext(ContextoProductos);
  const [isModalFinalizarOpen, setisModalFinalizarOpen] = useState(false);
  const navigate = useNavigate();

  const eliminarProducto = (id) => {
  setProductosSeleccionados(prevProductos => prevProductos.filter(producto => producto.id !== id));
};

  return (
    <>
      <div className="headerContainer">
        <div className="contenedorBotones">
          <button onClick={()=>{
            eliminarProducto(productoPulsado.id);
            setProductoPulsado(null);
          }}>Borrar</button>
          <button>Observaciones</button>
          <button
            onClick={() => {
              navigate("/pedidos");
            }}
          >
            Descartar
          </button>
        </div>

        <div className="medio">
          <input type="text" name="buscar" id="buscar" />
          <button
            name="btnBuscar"
            onClick={() => <BuscarProducto productos={productos} />}
          >
            Buscar
          </button>
          <button onClick={() => setisModalFinalizarOpen(true)}>
            Finalizar
          </button>
        </div>
      </div>
      <ModalFinalizarPedido
        isModalFinalizarOpen={isModalFinalizarOpen}
        setisModalFinalizarOpen={setisModalFinalizarOpen}
        productosSeleccionados={productosSeleccionados}
        cliente={cliente}
        nuevoCliente={nuevoCliente}
      />
    </>
  );
};

export default HeaderProductos;
