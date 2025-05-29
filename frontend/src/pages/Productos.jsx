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

const Productos = () => {
  const { clientes } = useContext(ContextoCliente);
  const { productos } = useContext(ContextoProductos);

  const { telefono } = useParams();
  const [cliente, setCliente] = useState();
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [productoPulsado, setProductoPulsado] = useState();

  useEffect(() => {
    setCliente(clientes.find((cliente) => cliente.telefono == telefono));
  }, [clientes, telefono]);

  function siHayClientes() {
    return (
      <>
        <ListaProductos
          setProductosSeleccionados={setProductosSeleccionados}
          productos={productos}
        />
        <ModalCrearCliente telefono={telefono} />
      </>
    );
  }

  function existeClientesYProductos() {
    return clientes.length > 0 && productos.length > 0;
  }

  return (
    <div className="pagina">
      <HeaderProductos
        productosSeleccionados={productosSeleccionados}
        productos={productos}
        cliente={cliente}
      />

      <div className="body">
        <BarraProductosParaPedido
          productosSeleccionados={productosSeleccionados}
          productoPulsado={productoPulsado}
        />
        <div className="contenido">
          {!existeClientesYProductos() ? <Cargando /> : siHayClientes()}
        </div>
        <Empleados />
      </div>
    </div>
  );
};

export default Productos;
