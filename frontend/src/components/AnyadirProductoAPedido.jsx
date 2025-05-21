import { useContext, useState } from "react";
import BarraProductosParaPedido from "./BarraProductosParaPedido";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const AnyadirProductoAPedido = ({ producto }) => {
  return (
    <>
      <BarraProductosParaPedido productosPedido={productosPedido} />
    </>
  );
};

export default AnyadirProductoAPedido;
