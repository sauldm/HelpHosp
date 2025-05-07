import { Link } from "react-router-dom";

function Navbar() {
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
}

export default Navbar;
