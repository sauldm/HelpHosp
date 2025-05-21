import { useContext, useState } from "react";
import Pedido from "./Pedido";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";
import ModalGeneral from "./ModalGeneral";

const ListaPedidos = () => {
  const pedidos = useContext(ContextoPedidos);
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState();

  return (
    <>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <>
            <button
              className="btnPedido"
              onClick={() => {
                setisModalPedidoOpen(true);
                setPedidoSeleccionado(pedido);
              }}
            >
              {pedido.id}
            </button>
          </>
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
