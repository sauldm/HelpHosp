import { useLocation } from "react-router-dom";
import HeaderProductos from "./HeaderProductos";
import HeaderGeneral from "./HeaderGeneral";

const Header = () => {
  const location = useLocation();

  return location.pathname === "/productos" ? (
    <HeaderProductos />
  ) : (
    <HeaderGeneral />
  );
};

export default Header;
