import LoginForm from "../components/LoginForm";

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
