import { Route, Routes } from "react-router-dom";
import Pedidos from "../pages/Pedidos";
import Sesion from "../pages/Sesion";
import Productos from "../pages/Productos";
import Terraza from "../pages/Terraza";
import Barra from "../pages/Barra";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pedidos />} />
      <Route path="/sesion" element={<Sesion />} />
      <Route path="/productos/:telefono" element={<Productos />} />
      <Route path="/terraza" element={<Terraza />} />
      <Route path="/barra" element={<Barra />} />
    </Routes>
  );
};

export default Rutas;
