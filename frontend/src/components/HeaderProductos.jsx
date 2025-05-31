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
      <div className="headerContainer">
        <div className="contenedorBotones">
          <button
            onClick={() => {
              if (indiceProductoPulsado !== null) {
                eliminarProducto(indiceProductoPulsado);
              }
            }}
            disabled={indiceProductoPulsado === null}
          >
            Borrar
          </button>
          <button
            onClick={() => {
              if (indiceProductoPulsado !== null) {
                console.log("bieeen");
                setIsModalObservacionesOpen(true);
              }
            }}
            disabled={indiceProductoPulsado === null}
          >
            Observaciones
          </button>
          <button
            onClick={() => {
              setIndiceProductoPulsado(null);
              navigate("/pedidos");
            }}
          >
            Descartar
          </button>
        </div>

        <div className="medio">
          Buscar Producto
          <input
            type="text"
            name="buscar"
            id="buscar"
            value={palabraABuscar}
            onChange={(e) => {
              setPalabraABuscar(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setisModalFinalizarOpen(true);
            }}
          >
            Finalizar
          </button>
        </div>
      </div>
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
