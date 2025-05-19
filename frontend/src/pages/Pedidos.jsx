import ListaPedidos from "../components/ListaPedidos";
import Pedido from "../components/Pedido";

function Pedidos() {
  let pedido = {
    id: 1,
    numero: 2,
  };

  return (
    <>
      <div className="pagina">
        <ListaPedidos />
      </div>
    </>
  );
}

export default Pedidos;
