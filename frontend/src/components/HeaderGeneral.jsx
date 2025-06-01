import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useState } from "react";

/**
 * @component HeaderGeneral
 * @description Componente de encabezado general que proporciona navegación a diferentes
 * secciones de pedidos (teléfono, terraza, barra) y gestión de productos.
 * Incluye un modal para la entrada de números de teléfono en pedidos telefónicos.
 * 
 * @returns {JSX.Element} Retorna el componente de encabezado con botones de navegación
 * y un modal para pedidos telefónicos.
 */
const HeaderGeneral = () => {
  /**
   * @state {boolean} isModalTelefonoOpen - Controla la visibilidad del modal de teléfono
   * @state {string} telefono - Almacena el número de teléfono ingresado
   */
  const [isModalTelefonoOpen, setisModalTelefonoOpen] = useState(false);
  const [telefono, setTelefono] = useState("");
  const navigate = useNavigate();
  
  /** @constant {RegExp} patronTelefono - Expresión regular para validar números de teléfono de 9 dígitos */
  const patronTelefono = /^[0-9]{9}$/;

  /**
   * @function isTelefonoValido
   * @description Valida si el número de teléfono ingresado cumple con el patrón requerido
   * @returns {boolean} Retorna true si el teléfono es válido, false en caso contrario
   */
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
