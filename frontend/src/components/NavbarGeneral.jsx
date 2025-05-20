import { Link } from "react-router-dom";

const NavbarGeneral = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Pedidos</Link>
        </li>
        <li>
          <Link to="/sesion">Sesión</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarGeneral;
