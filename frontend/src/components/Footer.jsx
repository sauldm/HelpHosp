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
