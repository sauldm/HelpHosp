import { useContext, useEffect, useState } from "react";
import Pedido from "./Pedido";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const ListaPedidos = () => {
  const pedidos = useContext(ContextoPedidos);

  return (
    <>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <Pedido key={index} pedido={pedido}></Pedido>
        ))}
      </div>
    </>
  );
};
export default ListaPedidos;
