import { useState } from "react";
import ModalPedido from "./ModalGeneral";

const Pedido = ({ pedido }) => {
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);

  return (
    <div>
      <button className="btnPedido" onClick={() => setisModalPedidoOpen(true)}>
        {pedido.numero}
      </button>
      <ModalPedido
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
      >
        <p>ID: {pedido.id}</p>
        <p>Número: {pedido.numero}</p>
      </ModalPedido>
    </div>
  );
};

export default Pedido;
