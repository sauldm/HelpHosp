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
        <div>
          Número:{" "}
          {pedido.productos.map((producto, index) => (
            <>{producto.nombre} </>
          ))}
        </div>
      </ModalGeneral>
    </div>
  );
};

export default Pedido;
