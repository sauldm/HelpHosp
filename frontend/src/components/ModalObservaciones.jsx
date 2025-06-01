import { useState, useEffect } from "react";
import ModalGeneral from "./ModalGeneral";

/**
 * @component ModalObservaciones
 * @description Modal que permite agregar o editar observaciones para un producto.
 * Mantiene un estado local de la observación y se actualiza cuando cambia el valor inicial.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Function} props.alEnviar - Función callback que se ejecuta al enviar la observación
 * @param {boolean} props.isModalObservacionesOpen - Estado de visibilidad del modal
 * @param {Function} props.setIsModalObservacionesOpen - Función para controlar la visibilidad del modal
 * @param {string} props.valorInicial - Valor inicial de la observación (si existe)
 * 
 * @returns {JSX.Element} Retorna el modal con un formulario para agregar/editar observaciones
 */
const ModalObservaciones = ({
  alEnviar,
  isModalObservacionesOpen,
  setIsModalObservacionesOpen,
  valorInicial,
}) => {
  /**
   * @state {string} observacion - Estado local que almacena el texto de la observación
   */
  const [observacion, setObservacion] = useState(valorInicial || "");

  /**
   * @effect
   * @description Actualiza el estado local cuando cambia el valor inicial o se abre el modal
   */
  useEffect(() => {
    setObservacion(valorInicial || "");
  }, [valorInicial, isModalObservacionesOpen]);

  /**
   * @function manejarEnvio
   * @description Maneja el envío del formulario, llamando al callback con la observación
   * @param {React.FormEvent} e - Evento del formulario
   */
  function manejarEnvio(e) {
    e.preventDefault();
    alEnviar(observacion);
    setIsModalObservacionesOpen(false);
  }

  return (
    <ModalGeneral
      isModalOpen={isModalObservacionesOpen}
      setisModalOpen={setIsModalObservacionesOpen}
      titulo="Agregar Observación"
    >
      <p className="modal-description">
        Agregue cualquier nota o especificación especial para este producto
      </p>
      <form onSubmit={manejarEnvio} className="modal-form">
        <label>
          Observación
          <input
            type="text"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
            placeholder="Escriba aquí su observación"
            required
          />
        </label>
        <button type="submit">Guardar Observación</button>
      </form>
    </ModalGeneral>
  );
};

export default ModalObservaciones;
