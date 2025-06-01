import { useContext, useState } from "react";
import ContextoCliente from "./contexto/ContextoCliente";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

/**
 * @component ModalCrearCliente
 * @description Modal para crear un nuevo cliente. Se muestra automáticamente cuando
 * se detecta un número de teléfono que no está asociado a ningún cliente existente.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {string} props.telefono - Número de teléfono del nuevo cliente
 * @param {Function} props.alEnviar - Función callback que se ejecuta al crear el cliente
 * 
 * @returns {JSX.Element|null} Retorna el modal de creación de cliente o null si el teléfono ya existe
 */
const ModalCrearCliente = ({ telefono, alEnviar }) => {
  const { clientes } = useContext(ContextoCliente);
  const navegar = useNavigate();
  
  const [isModalClienteOpen, setisModalClienteOpen] = useState(true);
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");

  /**
   * @function isFormValido
   * @description Valida que el formulario tenga los campos requeridos
   * @param {string} nombre - Nombre del cliente a validar
   * @returns {boolean} True si el formulario es válido
   */
  function isFormValido(nombre) {
    return nombre.trim() !== "";
  }

  /**
   * @function manejarEnvio
   * @description Maneja el envío del formulario de creación de cliente
   * @param {Event} e - Evento del formulario
   */
  function manejarEnvio(e) {
    e.preventDefault();
    if (isFormValido(nombre)) {
      const nuevoCliente = {
        nombre,
        domicilio,
        telefono,
      };
      alEnviar(nuevoCliente);
      setisModalClienteOpen(false);
    } else {
      setNombre("");
      setDomicilio("");
    }
  }

  /**
   * @function isTelefonoDeCliente
   * @description Verifica si el teléfono ya está asociado a un cliente existente
   * @returns {boolean} True si el teléfono ya está registrado
   */
  function isTelefonoDeCliente() {
    return clientes.some((cliente) => cliente.telefono == telefono);
  }

  if (!isTelefonoDeCliente()) {
    return (
      <ModalGeneral
        isModalOpen={isModalClienteOpen}
        setisModalOpen={setisModalClienteOpen}
        alCerrar={() => navegar("/pedidos")}
        titulo="Nuevo Cliente"
      >
        <p className="modal-description">
          Por favor, ingrese los datos del nuevo cliente para el teléfono {telefono}
        </p>
        <form onSubmit={manejarEnvio} className="modal-form">
          <label>
            Nombre
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ingrese el nombre del cliente"
              required
            />
          </label>
          <label>
            Domicilio
            <input
              type="text"
              value={domicilio}
              onChange={(e) => setDomicilio(e.target.value)}
              placeholder="Ingrese el domicilio del cliente"
            />
          </label>

          <button type="submit">Crear Cliente</button>
        </form>
      </ModalGeneral>
    );
  }

  return null;
};

export default ModalCrearCliente;
