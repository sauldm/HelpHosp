import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const ModalGeneral = ({ isModalOpen, setisModalOpen, children, alCerrar }) => {
  const navegar = useNavigate();
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          setisModalOpen(false);
          alCerrar ? alCerrar() : null;
        }}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-header">
            <button
              className="modal-close"
              onClick={() => {
                setisModalOpen(false);
                alCerrar ? alCerrar() : null;
              }}
            >
              ✕
            </button>
          </div>
          <div className="modal-body">
            {children}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalGeneral;
