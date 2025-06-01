/**
 * @component Footer
 * @description Componente de pie de página que muestra información básica de la aplicación
 * y el copyright. Incluye el nombre de la aplicación, un eslogan y el año actual.
 * 
 * @returns {JSX.Element} Retorna el componente de pie de página con la información de la aplicación
 */
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>HelpHosp</h3>
          <p>Gestión inteligente de hostelería</p>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} HelpHosp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
