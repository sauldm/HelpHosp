import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";
import { useContext, useState } from "react";
import ContextoPedidos from "./contexto/ContextoPedidos";
import ContextoCliente from "./contexto/ContextoCliente";
import ContextoProductos from "./contexto/ContextoProductos";

/**
 * @component ModalFinalizarPedido
 * @description Modal que permite finalizar un pedido, mostrando el total,
 * permitiendo seleccionar la forma de encargo y confirmando la operación.
 * Maneja la creación de nuevos clientes si es necesario.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Array} props.productosSeleccionados - Lista de productos en el pedido
 * @param {Object} props.cliente - Cliente existente que realiza el pedido
 * @param {Object} props.nuevoCliente - Datos del nuevo cliente si se está creando uno
 * @param {boolean} props.isModalFinalizarOpen - Estado de visibilidad del modal
 * @param {Function} props.setisModalFinalizarOpen - Función para controlar la visibilidad del modal
 * 
 * @returns {JSX.Element|null} Retorna el modal de finalización de pedido o null si está cerrado
 */
const ModalFinalizarPedido = ({
  productosSeleccionados,
  cliente,
  nuevoCliente,
  isModalFinalizarOpen,
  setisModalFinalizarOpen,
}) => {
  /**
   * @context
   * @property {Function} crearCliente - Función para crear un nuevo cliente
   * @property {Function} crearPedido - Función para crear un nuevo pedido
   * @property {Function} setIndiceProductoPulsado - Función para actualizar el producto seleccionado
   */
  const { crearCliente } = useContext(ContextoCliente);
  const { crearPedido } = useContext(ContextoPedidos);
  const { setIndiceProductoPulsado } = useContext(ContextoProductos);

  /**
   * @state {string} formaDeEncargo - Forma de entrega del pedido (Domicilio/Recoger)
   */
  const [formaDeEncargo, setFormaDeEncargo] = useState("Domicilio");
  
  let idProductos = [];
  const navegar = useNavigate();
  let total;

  if (!isModalFinalizarOpen) return null;

  /**
   * @function onConfirm
   * @description Maneja la confirmación del pedido, creando el cliente si es nuevo,
   * formateando los productos y creando el pedido en el sistema
   */
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
