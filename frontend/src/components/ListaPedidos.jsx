import { useContext, useState } from "react";
import Pedido from "./Pedido";
import ModalGeneral from "./ModalGeneral";
import Cargando from "./Cargando";
import ContextoPedidos from "./contexto/ContextoPedidos";
import CrearCliente from "./CrearCliente";

const ListaPedidos = () => {
  const { pedidos, eliminarPedido } = useContext(ContextoPedidos);
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState();

  if (pedidos.length == 0) {
    return (
      <div className="body">
        <Cargando />
      </div>
    );
  }

  return (
    <>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <>
            <div key={index}>
              <button
                className="btnPedido"
                onClick={() => {
                  setisModalPedidoOpen(true);
                  setPedidoSeleccionado(pedido);
                }}
              >
                {pedido.id}
              </button>
              
            </div>
            <button
                className="btnEliminarPedido"
                onClick={() => eliminarPedido(pedido)}
              >asdasdasd </button>
          </>
        ))}
      </div>
      <ModalGeneral
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
        alCerrar={() => null}
      >
        <Pedido pedido={pedidoSeleccionado} />
      </ModalGeneral>
    </>
  );
};
export default ListaPedidos;
