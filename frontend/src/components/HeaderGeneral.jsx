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
        <div className="headerContainer">
          <div className="header-group">
            <button 
              onClick={() => setisModalTelefonoOpen(true)}
              className="header-button"
            >
              <span className="icon">📞</span>
              <span className="text">Pedido Teléfono</span>
            </button>
            <button 
              onClick={() => navigate("/terraza")}
              className="header-button"
            >
              <span className="icon">🌳</span>
              <span className="text">Pedido Terraza</span>
            </button>
            <button 
              onClick={() => navigate("/barra")}
              className="header-button"
            >
              <span className="icon">🍺</span>
              <span className="text">Pedido Barra</span>
            </button>
          </div>
          
          <button
            className="header-button add-products"
            onClick={() => navigate("/anyadirProductos")}
          >
            <span className="icon">➕</span>
            <span className="text">Productos</span>
          </button>
        </div>

        <ModalGeneral
          isModalOpen={isModalTelefonoOpen}
          setisModalOpen={setisModalTelefonoOpen}
        >
          <form
            className="phone-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (isTelefonoValido()) {
                setisModalTelefonoOpen(false);
                navigate("productos/" + telefono);
              }
            }}
          >
            <div className="form-group">
              <label htmlFor="telefono">Número de teléfono:</label>
              <input
                id="telefono"
                type="tel"
                pattern="[0-9]{9}"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Introduce 9 dígitos"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Continuar
            </button>
          </form>
        </ModalGeneral>
      </header>
    </>
  );
};

export default HeaderGeneral;
