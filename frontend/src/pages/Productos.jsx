import { useContext, useEffect, useState } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import ModalCrearCliente from "../components/ModalCrearCliente";
import ContextoCliente from "../components/contexto/ContextoCliente";
import HeaderProductos from "../components/HeaderProductos";
import ContextoProductos from "../components/contexto/ContextoProductos";

/**
 * @component Productos
 * @description Página principal de productos que muestra la lista de productos disponibles,
 * gestiona la selección de productos y la información del cliente. Integra componentes para
 * la gestión de pedidos, empleados y creación de nuevos clientes.
 * 
 * @returns {JSX.Element} Retorna la página de productos con todos sus componentes
 */
const Productos = () => {
  /**
   * @state {Object} cliente - Cliente actual basado en el teléfono de la URL
   * @state {Object} nuevoCliente - Datos del nuevo cliente cuando se crea uno
   */
  const { setProductosSeleccionados } = useContext(ContextoProductos);
  const { clientes } = useContext(ContextoCliente);
  const { telefono } = useParams();
  const [cliente, setCliente] = useState();
  const [nuevoCliente, setNuevoCliente] = useState();
  
  /**
   * @effect
   * @description Efecto que busca y establece el cliente actual basado en el teléfono de la URL
   */
  useEffect(() => {
    setCliente(clientes.find((cliente) => cliente.telefono == telefono));
  }, [clientes, telefono]);

  /**
   * @function siHayClientes
   * @description Renderiza los componentes necesarios cuando hay clientes en el sistema
   * @returns {JSX.Element} Componentes de lista de productos y modal de creación de cliente
   */
  function siHayClientes() {
    return (
      <>
        <ListaProductos />
        <ModalCrearCliente telefono={telefono} alEnviar={setNuevoCliente}/>
      </>
    );
  }

  /**
   * @effect
   * @description Limpia la selección de productos al montar el componente
   */
  useEffect(() => {
    setProductosSeleccionados([]);
  }, []);

  /**
   * @function existeClientesYProductos
   * @description Verifica si existen clientes en el sistema
   * @returns {boolean} True si hay clientes registrados
   */
  function existeClientesYProductos() {
    return clientes.length > 0;
  }

  return (
    <div className="pagina-productos">
      <HeaderProductos cliente={cliente} nuevoCliente={nuevoCliente}/>
      <div className="productos-contenedor">
        <BarraProductosParaPedido />
        <div className="contenido">
          {!existeClientesYProductos() ? <Cargando /> : siHayClientes()}
        </div>
        <Empleados />
      </div>
    </div>
  );
};

export default Productos;
