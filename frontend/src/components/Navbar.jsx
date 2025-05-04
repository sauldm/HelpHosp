import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/pagos">Pagos</Link></li>
        <li><Link to="/estadisticas">Estadísticas</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
