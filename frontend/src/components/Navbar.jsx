import { useLocation, useParams } from "react-router-dom";
import NavbarGeneral from "./NavbarGeneral";
import BarraProductosParaPedido from "./BarraProductosParaPedido";
import { useContext } from "react";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

function Navbar() {
  const location = useLocation();
  return location.pathname.includes("/productos") ? (
    <BarraProductosParaPedido />
  ) : (
    <NavbarGeneral />
  );
}

export default Navbar;
