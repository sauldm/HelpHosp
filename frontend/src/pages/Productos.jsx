import { useContext, useEffect, useState } from "react";
import BarraProductosParaPedido from "../components/BarraProductosParaPedido";
import Empleados from "../components/Empleados";
import ListaProductos from "../components/ListaProductos";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import ModalCrearCliente from "../components/ModalCrearCliente";
import ContextoCliente from "../components/contexto/ContextoCliente";
import HeaderProductos from "../components/HeaderProductos";

const Productos = () => {
  const { clientes } = useContext(ContextoCliente);
  const { telefono } = useParams();
  const [cliente, setCliente] = useState();
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [productoPulsado, setProductoPulsado] = useState();

  useEffect(() => {
    setCliente(clientes.find((cliente) => cliente.telefono == telefono));
  }, [clientes, telefono, productosSeleccionados, productoPulsado, cliente]);

  if (clientes.length === 0) {
    return (
      <div className="body">
        <Cargando />
      </div>
    );
  }

  return (
    <div className="pagina">
      <HeaderProductos productosSeleccionados={productosSeleccionados}/>

      <div className="body">
        {console.log(productosSeleccionados)}
        <ModalCrearCliente telefono={telefono} />
        <BarraProductosParaPedido
          productosSeleccionados={productosSeleccionados}
          productoPulsado={productoPulsado}
        />
        <div className="contenido">
          <ListaProductos
            setProductosSeleccionados={setProductosSeleccionados}
          />
        </div>
        <Empleados />
      </div>
    </div>
  );
};

export default Productos;
