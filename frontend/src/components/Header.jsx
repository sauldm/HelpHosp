import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

const Header = () => {
  const [isModalTelefonoOpen, setisModalTelefonoOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <header>
        <button onClick={() => setisModalTelefonoOpen(true)}>Teléfono</button>
        <ModalGeneral
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
        </ModalGeneral>

        <button onClick={() => navigate("/terraza")}>Terraza</button>
        <button onClick={() => navigate("/barra")}>Barra</button>
      </header>
    </>
  );
};

export default Header;
