import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * @component NavbarGeneral
 * @description Barra de navegación principal de la aplicación que proporciona enlaces
 * a las diferentes secciones. Incluye un diseño responsive que se adapta a dispositivos
 * móviles mostrando un menú hamburguesa cuando es necesario.
 * 
 * @returns {JSX.Element} Retorna la barra de navegación con enlaces y control de menú móvil
 */
const NavbarGeneral = () => {
  /**
   * @state {boolean} isOpen - Controla la visibilidad del menú en dispositivos móviles
   * @state {boolean} isMobile - Indica si la aplicación se está ejecutando en un dispositivo móvil
   */
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  /**
   * @effect
   * @description Efecto que maneja el redimensionamiento de la ventana y ajusta
   * el comportamiento del menú según el tamaño de la pantalla
   */
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
