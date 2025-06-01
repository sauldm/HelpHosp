import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

/**
 * @component ModalGeneral
 * @description Componente de modal reutilizable que proporciona una ventana modal
 * con funcionalidad de cierre y contenido personalizable.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {boolean} props.isModalOpen - Estado que controla si el modal está abierto o cerrado
 * @param {Function} props.setisModalOpen - Función para actualizar el estado de apertura del modal
 * @param {React.ReactNode} props.children - Contenido que se renderizará dentro del modal
 * @param {Function} [props.alCerrar] - Función opcional que se ejecuta al cerrar el modal
 * @param {string} [props.titulo] - Título opcional para mostrar en el encabezado del modal
 * 
 * @returns {JSX.Element} Retorna un componente Modal con estructura y estilos predefinidos
 */
const ModalGeneral = ({ isModalOpen, setisModalOpen, children, alCerrar, titulo }) => {
  const navegar = useNavigate();

  const handleClose = () => {
    setisModalOpen(false);
    if (alCerrar) alCerrar();
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <div className="modal-header">
          {titulo && <h2 className="modal-title">{titulo}</h2>}
          <button
            className="modal-close"
            onClick={handleClose}
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default ModalGeneral;
