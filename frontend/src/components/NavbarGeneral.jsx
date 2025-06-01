import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavbarGeneral = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'fixed',
            top: '15px',
            left: '15px',
            zIndex: 1001,
            background: 'transparent',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      )}
      <nav className={`navbar ${isOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/pedidos" onClick={() => isMobile && setIsOpen(false)}>
              <span className="icon">📋</span>
              Pedidos
            </Link>
          </li>
          <li>
            <Link to="/sesion" onClick={() => isMobile && setIsOpen(false)}>
              <span className="icon">⚙️</span>
              Sesión
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavbarGeneral;
