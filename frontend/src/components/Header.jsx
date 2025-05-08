import { useState } from "react";
import ModalPedido from "./ModalGeneral";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isModalTelefonoOpen, setisModalTelefonoOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <button onClick={() => setisModalTelefonoOpen(true)}>Teléfono</button>
        <ModalPedido
          isModalOpen={isModalTelefonoOpen}
          setisModalOpen={setisModalTelefonoOpen}
        >
          <input type="text" />
          <button
            onClick={() => {
              navigate("/productos");
              setisModalTelefonoOpen(false);
            }}
          >
            Enviar
          </button>
        </ModalPedido>

        <button>Terraza</button>
        <button>Barra</button>
      </header>
    </>
  );
};

export default Header;
