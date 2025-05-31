import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useContext, useState } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";
import ContextoCliente from "./contexto/ContextoCliente";
import ContextoProductos from "./contexto/ContextoProductos";

const ModalFinalizarPedido = ({
  productosSeleccionados,
  cliente,
  nuevoCliente,
  isModalFinalizarOpen,
  setisModalFinalizarOpen,
}) => {
  const { crearCliente } = useContext(ContextoCliente);
  const [formaDeEncargo, setFormaDeEncargo] = useState("Domicilio");
  const { crearPedido } = useContext(ContextoPedidos);
  const { setIndiceProductoPulsado } = useContext(ContextoProductos);
  let idProductos = [];
  const navegar = useNavigate();
  let total;

  if (!isModalFinalizarOpen) return null;

  function onConfirm() {
    const productosFormateados = productosSeleccionados.map((producto) => ({
      producto_id: producto.id,
      observaciones:
        producto.observaciones ?? producto.pivot?.observaciones ?? "",
    }));

    if (nuevoCliente) {
      crearCliente(nuevoCliente);
      cliente = nuevoCliente;
    }

    const nuevoPedido = {
      cliente_telefono: cliente.telefono,
      formaDeEncargo: formaDeEncargo,
      productos: productosFormateados,
    };
    crearPedido(nuevoPedido);
    setisModalFinalizarOpen(false);
    setIndiceProductoPulsado(null);
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
