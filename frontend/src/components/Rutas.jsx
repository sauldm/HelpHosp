import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Sesion from "../pages/Sesion";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
      <Route path="/sesion" element={<Sesion />} />
    </Routes>
  );
};

export default Rutas;
