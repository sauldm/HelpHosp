import { useNavigate } from "react-router-dom";
import ModalFinalizarPedido from "./ModalFinalizarPedido";
import { useContext, useEffect, useState } from "react";
import ContextoProductos from "./contexto/ContextoProductos";
import ModalObservaciones from "./ModalObservaciones";

const HeaderProductos = ({ cliente, nuevoCliente }) => {
  const {
    productosSeleccionados,
    setProductosSeleccionados,
    indiceProductoPulsado,
    setIndiceProductoPulsado,
    setProductosASeleccionar,
    productos,
  } = useContext(ContextoProductos);
  const [isModalFinalizarOpen, setisModalFinalizarOpen] = useState(false);
  const [isModalObservacionesOpen, setIsModalObservacionesOpen] =
    useState(false);
  const navigate = useNavigate();
  const [palabraABuscar, setPalabraABuscar] = useState("");

  const eliminarProducto = (indice) => {
    setProductosSeleccionados((prevProductos) =>
      prevProductos.filter((producto, index) => index !== indice)
    );
    setIndiceProductoPulsado(null);
  };

  useEffect(() => {
    setProductosASeleccionar(
      palabraABuscar != ""
        ? productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(palabraABuscar.toLowerCase())
          )
        : productos
    );
  }, [palabraABuscar]);

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
