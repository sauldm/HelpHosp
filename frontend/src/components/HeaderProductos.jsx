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

        <div className="medio">
          <input type="text" name="buscar" id="buscar" />
          <button name="btnBuscar">Buscar</button>
        </div>
      </div>
    </>
  );
};

export default HeaderProductos;
