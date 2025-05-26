import { useNavigate } from "react-router-dom";
import BuscarProducto from "./BuscarProducto";

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
              navigate("/pedidos");
            }}
          >
            Descartar
          </button>
        </div>

        <div className="medio">
          <input type="text" name="buscar" id="buscar" />
          <button name="btnBuscar" onClick={() => <BuscarProducto />}>
            Buscar
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderProductos;
