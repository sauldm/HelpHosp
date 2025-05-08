import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Sesion from "../pages/Sesion";
import Productos from "../pages/Productos";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  );
};

export default Rutas;
