import { useContext, useState } from "react";
import Pedido from "./Pedido";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";
import ModalGeneral from "./ModalGeneral";
import Cargando from "./Cargando";

const ListaPedidos = () => {
  const pedidos = useContext(ContextoPedidos);
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
        ))}
      </div>
      <ModalGeneral
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
      >
        <Pedido pedido={pedidoSeleccionado} />
      </ModalGeneral>
    </>
  );
};
export default ListaPedidos;
