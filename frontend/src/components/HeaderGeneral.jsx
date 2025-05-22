import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { ContextoPedidos } from "./contexto/ProveedorPedidos";

const HeaderGeneral = () => {
  const [isModalTelefonoOpen, setisModalTelefonoOpen] = useState(false);
  const [telefono, setTelefono] = useState();
  const navigate = useNavigate();

  return (
    <>
      <header>
        <button onClick={() => setisModalTelefonoOpen(true)}>Teléfono</button>
        <ModalGeneral
          isModalOpen={isModalTelefonoOpen}
          setisModalOpen={setisModalTelefonoOpen}
        >
          Teléfono:{" "}
          <input
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
          <button
            className="enviarTelefono"
            onClick={() => {
              if (telefono.length == 9) {
                navigate(`/productos/${telefono}`);
                setisModalTelefonoOpen(false);
              }
              setisModalTelefonoOpen(false);
            }}
          >
            Enviar
          </button>
        </ModalGeneral>

        <button onClick={() => navigate("/terraza")}>Terraza</button>
        <button onClick={() => navigate("/barra")}>Barra</button>
        <button
          className="anyadirProductos"
          onClick={() => navigate("/anyadirProductos")}
        >
          +Productos
        </button>
      </header>
    </>
  );
};

export default HeaderGeneral;
