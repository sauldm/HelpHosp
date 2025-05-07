import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Estadisticas from "../pages/Estadisticas";
import PedidoDetalle from "./PedidoDetalle";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
      <Route path="/estadisticas" element={<Estadisticas />} />
      <Route path="/pedido" element={<PedidoDetalle />} />
    </Routes>
  );
};

export default Rutas;
