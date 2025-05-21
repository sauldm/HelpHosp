import { useEffect, useState } from "react";
import data from "../json/pedidos.json";
import Pedido from "./Pedido";
import AnyadirProducto from "./AnyadirProducto";

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setPedidos(data);
  }, []);
  return (
    <>
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <button onClick={() => <AnyadirProducto />}>
            <Pedido key={index} pedido={pedido}></Pedido>
          </button>
        ))}
      </div>
    </>
  );
};
export default ListaPedidos;
