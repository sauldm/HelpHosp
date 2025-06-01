import { useNavigate } from "react-router-dom";
import ModalFinalizarPedido from "./ModalFinalizarPedido";
import { useContext, useEffect, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";
import ModalObservaciones from "./ModalObservaciones";

/**
 * @component HeaderProductos
 * @description Componente de encabezado para la página de productos que proporciona
 * funcionalidades para gestionar productos seleccionados, incluyendo eliminación,
 * observaciones, búsqueda y finalización de pedido.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.cliente - Información del cliente actual
 * @param {Object} props.nuevoCliente - Información del nuevo cliente si se está creando uno
 * 
 * @returns {JSX.Element} Retorna el encabezado con controles para gestionar productos
 */
const HeaderProductos = ({ cliente, nuevoCliente }) => {
  /**
   * @context ContextoProductos
   * @property {Array} productosSeleccionados - Lista de productos seleccionados
   * @property {Function} setProductosSeleccionados - Función para actualizar productos seleccionados
   * @property {number} indiceProductoPulsado - Índice del producto actualmente seleccionado
   * @property {Function} setIndiceProductoPulsado - Función para actualizar el índice seleccionado
   * @property {Function} setProductosASeleccionar - Función para actualizar la lista de productos disponibles
   * @property {Array} productos - Lista completa de productos
   */
  const {
    productosSeleccionados,
    setProductosSeleccionados,
    indiceProductoPulsado,
    setIndiceProductoPulsado,
    setProductosASeleccionar,
    productos,
  } = useContext(ContextoProductos);

  /**
   * @state {boolean} isModalFinalizarOpen - Controla la visibilidad del modal de finalización
   * @state {boolean} isModalObservacionesOpen - Controla la visibilidad del modal de observaciones
   * @state {string} palabraABuscar - Término de búsqueda para filtrar productos
   */
  const [isModalFinalizarOpen, setisModalFinalizarOpen] = useState(false);
  const [isModalObservacionesOpen, setIsModalObservacionesOpen] = useState(false);
  const navigate = useNavigate();
  const [palabraABuscar, setPalabraABuscar] = useState("");

  /**
   * @function eliminarProducto
   * @description Elimina un producto de la lista de seleccionados
   * @param {number} indice - Índice del producto a eliminar
   */
  const eliminarProducto = (indice) => {
    setProductosSeleccionados((prevProductos) =>
      prevProductos.filter((producto, index) => index !== indice)
    );
    setIndiceProductoPulsado(null);
  };

  /**
   * @effect
   * @description Efecto que filtra los productos según el término de búsqueda
   */
  useEffect(() => {
    setProductosASeleccionar(
      palabraABuscar != ""
        ? productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(palabraABuscar.toLowerCase())
          )
        : productos
    );
  }, [palabraABuscar]);

  /**
   * @function handleObservaciones
   * @description Maneja la actualización de observaciones para un producto seleccionado
   * @param {string} obs - Texto de las observaciones
   */
  const handleObservaciones = (obs) => {
    if (indiceProductoPulsado === null) return;
    const nuevosProductos = productosSeleccionados.map((producto, idx) =>
      idx === indiceProductoPulsado
        ? {
            ...producto,
            pivot: {
              ...producto.pivot,
              observaciones: obs,
            },
          }
        : producto
    );
    setProductosSeleccionados(nuevosProductos);
  };

  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="header-group">
            <button
              className="header-button"
              onClick={() => {
                if (indiceProductoPulsado !== null) {
                  eliminarProducto(indiceProductoPulsado);
                }
              }}
              disabled={indiceProductoPulsado === null}
            >
              <span className="icon">🗑️</span>
              <span className="text">Borrar</span>
            </button>
            <button
              className="header-button"
              onClick={() => {
                if (indiceProductoPulsado !== null) {
                  setIsModalObservacionesOpen(true);
                }
              }}
              disabled={indiceProductoPulsado === null}
            >
              <span className="icon">✏️</span>
              <span className="text">Observaciones</span>
            </button>
            <button
              className="header-button"
              onClick={() => {
                setIndiceProductoPulsado(null);
                navigate("/pedidos");
              }}
            >
              <span className="icon">❌</span>
              <span className="text">Descartar</span>
            </button>
          </div>

          <div className="productos-search">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={palabraABuscar}
              onChange={(e) => setPalabraABuscar(e.target.value)}
            />
          </div>

          <button
            className="header-button add-products"
            onClick={() => setisModalFinalizarOpen(true)}
          >
            <span className="icon">✅</span>
            <span className="text">Finalizar</span>
          </button>
        </div>
      </header>

      <ModalFinalizarPedido
        isModalFinalizarOpen={isModalFinalizarOpen}
        setisModalFinalizarOpen={setisModalFinalizarOpen}
        productosSeleccionados={productosSeleccionados}
        cliente={cliente}
        nuevoCliente={nuevoCliente}
      />
      <ModalObservaciones
        alEnviar={handleObservaciones}
        isModalObservacionesOpen={isModalObservacionesOpen}
        setIsModalObservacionesOpen={setIsModalObservacionesOpen}
        valorInicial={
          indiceProductoPulsado !== null
            ? productosSeleccionados[indiceProductoPulsado]?.pivot
                ?.observaciones || ""
            : ""
        }
      />
    </>
  );
};

export default HeaderProductos;
