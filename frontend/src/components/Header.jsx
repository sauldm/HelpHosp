import { useLocation } from "react-router-dom";
import HeaderProductos from "./HeaderProductos";
import HeaderGeneral from "./HeaderGeneral";

/**
 * @component Header
 * @description Componente de encabezado condicional que se renderiza según la ruta actual.
 * Utiliza react-router-dom para determinar qué tipo de encabezado mostrar:
 * - No muestra nada en la ruta de productos (/productos/*)
 * - No muestra nada en la ruta raíz (/)
 * - Muestra el HeaderGeneral en todas las demás rutas
 * 
 * @returns {JSX.Element|null} Retorna el encabezado apropiado según la ruta o null
 */
const Header = () => {
  const location = useLocation();

  if (location.pathname.includes("/productos")) {
    return null;
  } else if (location.pathname == "/") {
    return <></>;
  } else {
    return <HeaderGeneral />;
  }
};

export default Header;
