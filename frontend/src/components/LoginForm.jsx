/**
 * @component LoginForm
 * @description Formulario de inicio de sesión que incluye campos para correo electrónico
 * y contraseña, además de enlaces para recuperación de contraseña y registro de nuevos usuarios.
 * El formulario incluye validación básica de campos requeridos y formato de correo electrónico.
 * 
 * @returns {JSX.Element} Retorna un formulario de inicio de sesión con campos y enlaces relacionados
 */
const LoginForm = () => {
  return (
    <form className="loginForm">
      <div className="inputLogin">
        <label htmlFor="email">Correo Electrónico</label>
        <input
          id="email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div className="inputLogin">
        <label htmlFor="password">Contraseña</label>
        <div className="passwordInput">
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            required
          />
          <a href="#">¿Olvidó su contraseña?</a>
        </div>
      </div>

      <button type="submit" className="loginButton">
        Iniciar Sesión
      </button>
      <div className="registerRow">
        <span>¿No tiene una cuenta?</span>{" "}
        <a href="#" className="registerLink">
          Regístrese
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
