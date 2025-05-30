import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useState } from "react";

const HeaderGeneral = () => {
  const [isModalTelefonoOpen, setisModalTelefonoOpen] = useState(false);
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();
  const patronTelefono = /^[0-9]{9}$/;

  function isTelefonoValido() {
    return patronTelefono.test(telefono);
  }

  return (
    <>
      <header>
        <button onClick={() => setisModalTelefonoOpen(true)}>Pedido Teléfono</button>
        <ModalGeneral
          isModalOpen={isModalTelefonoOpen}
          setisModalOpen={setisModalTelefonoOpen}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault;
              if (isTelefonoValido()) {
                setisModalTelefonoOpen(false);
                return navigate("productos/" + telefono);
              }
            }}
          >
            <label>
              Teléfono:
              <input
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        </ModalGeneral>

        <button onClick={() => navigate("/terraza")}>Pedido Terraza</button>
        <button onClick={() => navigate("/barra")}>Pedido Barra</button>
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
