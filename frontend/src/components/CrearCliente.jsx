import { useContext, useState } from "react";
import ContextoCliente from "./contexto/ContextoCliente";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

const CrearCliente = ({ telefono }) => {
  const { crearCliente } = useContext(ContextoCliente);
  const navegar = useNavigate();
  const [isModalClienteOpen, setisModalClienteOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [formaDeEncargo, setFormaDeEncargo] = useState("Domicilio");
  const [cliente, setCliente] = useState({
    nombre: "",
    domicilio: "",
    telefono: telefono,
  });

  function isFormValido(nombre) {
    return nombre == "";
  }

  function manejarEnvio(e) {
    e.preventDefault();
    if (isFormValido(nombre)) {
      setCliente(nombre, domicilio, telefono);
      crearCliente(cliente);
      navegar("productos/" + telefono);

      setisModalClienteOpen(false);
    } else {
      setNombre("");
      setDomicilio("");
      setFormaDeEncargo("domicilio");
    }
  }

  return (
    <>
      {console.log("hola")}
      <ModalGeneral
        isModalOpen={isModalClienteOpen}
        setisModalOpen={setisModalClienteOpen}
      >
        <form onSubmit={manejarEnvio}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
          <input type="submit" />
        </form>
      </ModalGeneral>
    </>
  );
};

export default CrearCliente;
