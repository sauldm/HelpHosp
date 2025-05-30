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
      };
      crearCliente(nuevoCliente);
      setisModalClienteOpen(false);
    } else {
      setNombre("");
      setDomicilio("");
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
        
        <input type="submit" value="Crear Cliente" />
      </form>
    </ModalGeneral>
  );
};

export default CrearCliente;
