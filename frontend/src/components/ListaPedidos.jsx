import { useContext, useState } from "react";
import Pedido from "./Pedido";
import ModalGeneral from "./ModalGeneral";
import Cargando from "./Cargando";
import ContextoPedidos from "./contexto/ContextoPedidos";

const ListaPedidos = () => {
  const { pedidos, getPedido } = useContext(ContextoPedidos);
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);

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
                onClick={async () => {
                  await getPedido(pedido.id);
                  setisModalPedidoOpen(true);
                }}
              >
                {pedido.id}
              </button>
            </div>
          </>
        ))}
      </div>
      <ModalGeneral
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
        alCerrar={() => null}
      >
        <Pedido />
      </ModalGeneral>
    </>
  );
};
export default ListaPedidos;
