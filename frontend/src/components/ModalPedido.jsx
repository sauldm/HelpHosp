import Modal from "react-modal";

const ModalPedido = ({ isModalOpen, setIsModalOpen, children }) => {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Modal pedido"
        style={{
          content: {
            width: "300px",
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
        <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
      </Modal>
    </>
  );
};

export default ModalPedido;
