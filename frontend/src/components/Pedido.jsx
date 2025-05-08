import { useState } from "react";
import ModalPedido from "./ModalPedido";

const Pedido = ({ pedido }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pedido">
      <button onClick={() => setIsModalOpen(true)}>{pedido.numero}</button>
      <ModalPedido isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <p>ID: {pedido.id}</p>
        <p>Número: {pedido.numero}</p>
      </ModalPedido>
    </div>
  );
};

export default Pedido;
