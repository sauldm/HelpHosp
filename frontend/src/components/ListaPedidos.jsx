import { useEffect, useState } from "react";
import data from "../json/pedidos.json";
import Pedido from "./Pedido";

const ListaPedidos = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    setPedidos(data);
  }, []);
  return (
    <>
      {pedidos.map((pedido, index) => (
        <div className="pedidos">
          <Pedido pedido={pedido}></Pedido>
        </div>
      ))}
    </>
  );
};
export default ListaPedidos;
