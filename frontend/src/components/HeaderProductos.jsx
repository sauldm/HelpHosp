import { useNavigate } from "react-router-dom";
import BuscarProducto from "./BuscarProducto";
import ModalFinalizarPedido from "./ModalFinalizarPedido";
import { useContext, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";

const HeaderProductos = ({ cliente, nuevoCliente }) => {
  const {productosSeleccionados, productos} = useContext(ContextoProductos);
  const [isModalFinalizarOpen, setisModalFinalizarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="headerContainer">
        <div className="contenedorBotones">
          <button>Borrar</button>
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
