import { useContext, useState } from "react";
import Pedido from "./Pedido";
import ModalGeneral from "./ModalGeneral";
import Cargando from "./Cargando";
import ContextoPedidos from "./contexto/ContextoPedidos";

const ListaPedidos = () => {
  const { pedidos, getPedido, eliminarPedido } = useContext(ContextoPedidos);
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);
  const [selectedPedido, setSelectedPedido] = useState(null);

  if (pedidos.length == 0) {
    return <Cargando />;
  }

  const handlePedidoClick = async (pedido) => {
    setSelectedPedido(pedido);
    await getPedido(pedido.id);
    setisModalPedidoOpen(true);
  };

  return (
    <>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <button
            key={index}
            className={`btnPedido-base ${
              pedido.formaDeEncargo === "Domicilio"
                ? "btnPedido-domicilio"
                : "btnPedido-recoger"
            }`}
            onClick={() => handlePedidoClick(pedido)}
          >
            {pedido.id}
          </button>
        ))}
      </div>
      <ModalGeneral
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
        titulo={`Pedido #${selectedPedido?.id || ''}`}
      >
        <Pedido />
        <button onClick={() =>{
          eliminarPedido(selectedPedido);
          setisModalPedidoOpen(false);
        }}>Aceptar</button>
      </ModalGeneral>
    </>
  );
};

export default ListaPedidos;
