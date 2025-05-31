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
        }}
        style={{
          content: {
            width: "500px",
            height: "300px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {children}
        <button
          className="cerrarModal"
          onClick={() => {
            setisModalOpen(false);
            alCerrar;
          }}
        >
          Cerrar
        </button>
      </Modal>
    </>
  );
};

export default ModalGeneral;
