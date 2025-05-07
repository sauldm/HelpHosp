import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import PedidoDetalle from "./PedidoDetalle";
import Sesion from "../pages/Sesion";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/pedido" element={<PedidoDetalle />} />
    </Routes>
  );
};

export default Rutas;
