import { useState } from "react";
import ModalPedido from "./ModalGeneral";
import ModalGeneral from "./ModalGeneral";

const Pedido = ({ pedido }) => {
  const [isModalPedidoOpen, setisModalPedidoOpen] = useState(false);

  return (
    <div>
      <button className="btnPedido" onClick={() => setisModalPedidoOpen(true)}>
        {pedido.id}
      </button>
      <ModalGeneral
        isModalOpen={isModalPedidoOpen}
        setisModalOpen={setisModalPedidoOpen}
      >
        <p>ID: {pedido.id}</p>
        <p>
          Número:{" "}
          {pedido.productos.map((producto, index) => (
            <p>{producto.nombre}</p>
          ))}
        </p>
      </ModalGeneral>
    </div>
  );
};

export default Pedido;
