import { useNavigate } from "react-router-dom";
import BuscarProducto from "./BuscarProducto";
import ModalFinalizarPedido from "./ModalFinalizarPedido";

const HeaderProductos = ({ productosSeleccionados, productos, cliente }) => {
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
          <button
            name="btnBuscar"
            onClick={() => <BuscarProducto productos={productos} />}
          >
            Buscar
          </button>
          <button
            onClick={() => (
              <ModalFinalizarPedido
                productosSeleccionados={productosSeleccionados}
                cliente={cliente}
              />
            )}
          >
            Finalizar
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderProductos;
