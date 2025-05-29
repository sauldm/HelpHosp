import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useContext, useState } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";

const ModalFinalizarPedido = ({ productosSeleccionados }) => {
    const {crearPedido} = useContext(ContextoPedidos);
  const navegar = useNavigate();
  const [isModalFinalizarOpen, setisModalFinalizarOpen] = useState(true);
  if (!isModalFinalizarOpen) return null;

  function sumaPrecios() {
    return productosSeleccionados.reduce((total, producto) => {
      return total + producto.precio;
    }, 0);
  }

  function onConfirm() {
    const nuevoPedido ={
        
    }
  }

  return (
    <ModalGeneral
      isModalOpen={isModalFinalizarOpen}
      setisModalOpen={setisModalFinalizarOpen}
      alCerrar={() => setisModalFinalizarOpen(false)}
    >
      <h2>Finalizar Pedido</h2>
      <p>Total: {sumaPrecios().toFixed(2)} €</p>
      <p>¿Estás seguro de que deseas finalizar el pedido?</p>
      <button onClick={onConfirm}>Sí, finalizar</button>
    </ModalGeneral>
  );
};

export default ModalFinalizarPedido;
