import { useNavigate } from "react-router-dom";

const HeaderProductos = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="headerContainer">
        <div className="contenedorBotones">
          <button>Borrar</button>
          <button>Observaciones</button>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Descartar
          </button>
        </div>
        <header>
          <button>Buscar</button>
        </header>
      </div>
    </>
  );
};

export default HeaderProductos;
