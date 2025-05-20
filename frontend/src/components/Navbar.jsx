import { Link, useLocation } from "react-router-dom";
import NavbarGeneral from "./NavbarGeneral";
import BarraProductosParaPedido from "./BarraProductosParaPedido";

function Navbar() {
  const location = useLocation();
  return location.pathname === "/productos" ? (
    <BarraProductosParaPedido />
  ) : (
    <NavbarGeneral />
  );
}

export default Navbar;
