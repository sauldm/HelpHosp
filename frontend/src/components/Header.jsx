import { useLocation } from "react-router-dom";
import HeaderProductos from "./HeaderProductos";
import HeaderGeneral from "./HeaderGeneral";

const Header = () => {
  const location = useLocation();

  if (location.pathname.includes("/productos")) {
    return <HeaderProductos />;
  } else if (location.pathname.includes("/")) {
    return <></>;
  } else {
    <HeaderGeneral />;
  }
};

export default Header;
