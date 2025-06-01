import { useEffect, useState } from "react";
import ContextoProductos from "./ContextoProductos";

/**
 * @component ProveedorProductos
 * @description Proveedor de contexto que gestiona el estado global de los productos en la aplicación.
 * Proporciona funciones para realizar operaciones CRUD con productos y mantiene el estado de
 * productos seleccionados y disponibles.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto
 * 
 * @returns {JSX.Element} Proveedor de contexto con el estado y funciones de productos
 */
const ProveedorProductos = ({ children }) => {
  /**
   * @state {Array} productos - Lista completa de productos en la base de datos
   * @state {Array} productosSeleccionados - Lista de productos seleccionados para el pedido actual
   * @state {number} indiceProductoPulsado - Índice del producto actualmente seleccionado
   * @state {Array} productosASeleccionar - Lista de productos disponibles para selección
   */
  const [productos, setProductos] = useState([]);
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [indiceProductoPulsado, setIndiceProductoPulsado] = useState();
  const [productosASeleccionar, setProductosASeleccionar] = useState([]);
  const API_URL = `${import.meta.env.VITE_API_URL}/productos`;

  /**
   * @async
   * @function getProductos
   * @description Obtiene todos los productos desde la API y actualiza el estado
   */
  const getProductos = async () => {
    const respuesta = await fetch(API_URL);
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos(data);
      setProductosASeleccionar(data);
    } else {
      console.error("Error al obtener productos");
    }
  };

  /**
   * @async
   * @function crearProducto
   * @description Crea un nuevo producto en la API y actualiza el estado
   * @param {Object} producto - Datos del nuevo producto a crear
   */
  const crearProducto = async (producto) => {
    const respuesta = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos((previo) => [...previo, data]);
      setProductosASeleccionar((previo) => [...previo, data]);
    } else console.error("Error al crear producto");
  };

  /**
   * @async
   * @function modificarProducto
   * @description Modifica un producto existente en la API y actualiza el estado
   * @param {Object} producto - Datos actualizados del producto
   */
  const modificarProducto = async (producto) => {
    const respuesta = await fetch(API_URL + "/" + producto.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
    if (respuesta.ok) {
      const data = await respuesta.json();
      setProductos((previo) =>
        previo.map((productoModificado) => productoModificado.id == data.id)
      );
    } else console.error("Error al modificar producto");
  };

  /**
   * @async
   * @function eliminarProducto
   * @description Elimina un producto de la API y actualiza el estado
   * @param {Object} producto - Producto a eliminar
   */
  const eliminarProducto = async (producto) => {
    await fetch(API_URL + "/" + producto.id, { method: "DELETE" });
    setPedidos((previo) =>
      previo.filter((productoEliminado) => productoEliminado.id !== producto.id)
    );
  };

  useEffect(() => {
    getProductos();
  }, []);

  const exportacion = {
    getProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto,
    productos,
    productosSeleccionados,
    setProductosSeleccionados,
    indiceProductoPulsado,
    setIndiceProductoPulsado,
    productosASeleccionar,
    setProductosASeleccionar,
  };
  return (
    <ContextoProductos.Provider value={exportacion}>
      {children}
    </ContextoProductos.Provider>
  );
};

export default ProveedorProductos;
