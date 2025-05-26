import { useLocation } from "react-router-dom";
import HeaderProductos from "./HeaderProductos";
import HeaderGeneral from "./HeaderGeneral";

const Header = () => {
  const location = useLocation();

  if (location.pathname.includes("/productos")) {
    return <HeaderProductos />;
  } else if (location.pathname == "/") {
    return <></>;
  } else {
    return <HeaderGeneral />;
  }
};

export default Header;
