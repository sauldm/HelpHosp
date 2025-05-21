import Modal from "react-modal";

const ModalGeneral = ({ isModalOpen, setisModalOpen, children }) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setisModalOpen(false)}
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
        <button className="cerrarModal" onClick={() => setisModalOpen(false)}>
          Cerrar
        </button>
      </Modal>
    </>
  );
};

export default ModalGeneral;
