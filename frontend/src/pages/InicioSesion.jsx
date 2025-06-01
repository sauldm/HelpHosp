import LoginForm from "../components/LoginForm";

/**
 * @component InicioSesion
 * @description Página de inicio de sesión de la aplicación. Muestra el logotipo
 * y eslogan de HelpHosp, junto con el formulario de inicio de sesión. Esta es
 * la primera página que ven los usuarios al acceder a la aplicación.
 * 
 * @returns {JSX.Element} Retorna la página de inicio de sesión con el formulario
 */
const InicioSesion = () => {
  return (
    <div className="bodyLogin">
      <div className="login">
        <h1>HelpHosp</h1>
        <p>Gestión inteligente de hostelería</p>
        <LoginForm />
      </div>
    </div>
  );
};
export default InicioSesion;
