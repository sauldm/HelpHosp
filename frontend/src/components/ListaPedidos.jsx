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
      <div className="pedidos">
        {pedidos.map((pedido, index) => (
          <Pedido pedido={pedido}></Pedido>
        ))}
      </div>
    </>
  );
};
export default ListaPedidos;
