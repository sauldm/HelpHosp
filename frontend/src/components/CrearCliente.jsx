import { useContext, useState } from "react";
import ContextoCliente from "./contexto/ContextoCliente";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

const CrearCliente = ({ telefono }) => {
  const { crearCliente } = useContext(ContextoCliente);
  const navegar = useNavigate();
  const [isModalClienteOpen, setisModalClienteOpen] = useState(true);
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [formaDeEncargo, setFormaDeEncargo] = useState("Domicilio");

  function isFormValido(nombre) {
    return nombre.trim() !== "";
  }

  function manejarEnvio(e) {
    e.preventDefault();
    if (isFormValido(nombre)) {
      const nuevoCliente = {
        nombre,
        domicilio,
        telefono,
        formaDeEncargo,
      };
      crearCliente(nuevoCliente);
      setisModalClienteOpen(false);
      navegar("/productos/" + telefono);
    } else {
      setNombre("");
      setDomicilio("");
      setFormaDeEncargo("Domicilio");
    }
  }

  return (
    <ModalGeneral
      isModalOpen={isModalClienteOpen}
      setisModalOpen={setisModalClienteOpen}
      alCerrar={() => navegar("/pedidos")}
    >
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Domicilio:
          <input
            type="text"
            value={domicilio}
            onChange={(e) => setDomicilio(e.target.value)}
          />
        </label>
        <label>
          Forma de encargo:
          <select
            value={formaDeEncargo}
            onChange={(e) => setFormaDeEncargo(e.target.value)}
          >
            <option value="Domicilio">Domicilio</option>
            <option value="Recoger">Recoger</option>
          </select>
        </label>
        <input type="submit" value="Crear Cliente" />
      </form>
    </ModalGeneral>
  );
};

export default CrearCliente;
