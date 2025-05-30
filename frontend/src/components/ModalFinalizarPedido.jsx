import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useContext, useState } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";

const ModalFinalizarPedido = ({
  productosSeleccionados,
  cliente,
  isModalFinalizarOpen,
  setisModalFinalizarOpen,
}) => {
  const [formaDeEncargo, setFormaDeEncargo] = useState("Domicilio");
  const { crearPedido } = useContext(ContextoPedidos);
  let idProductos = [];
  const navegar = useNavigate();
  let total;

  if (!isModalFinalizarOpen) return null;

  function sumaPrecios() {
    return productosSeleccionados.map((producto) => {
      return (total = +producto.precio);
    });
  }

  function onConfirm() {
    idProductos = productosSeleccionados.map((producto) => ({
      producto_id: producto.id,
    }));
    const nuevoPedido = {
      cliente_telefono: cliente.telefono,
      formaDeEncargo: formaDeEncargo,
      productos: idProductos,
    };
    crearPedido(nuevoPedido);
    setisModalFinalizarOpen(false);
    navegar("/pedidos");
  }

  return (
    <ModalGeneral
      isModalOpen={isModalFinalizarOpen}
      setisModalOpen={setisModalFinalizarOpen}
      alCerrar={() => setisModalFinalizarOpen(false)}
    >
      <h2>Finalizar Pedido</h2>
      <p>Total: {total} €</p>
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
      <p>¿Estás seguro de que deseas finalizar el pedido?</p>
      <button onClick={onConfirm}>Sí, finalizar</button>
    </ModalGeneral>
  );
};

export default ModalFinalizarPedido;
