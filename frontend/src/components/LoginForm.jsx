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
