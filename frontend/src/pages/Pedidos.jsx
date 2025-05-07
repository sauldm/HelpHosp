import Pedido from "../components/Pedido";

function Pedidos() {
  let pedido = {
    id: 1,
    numero: 2,
  };

  return (
    <>
      <div className="pagina">
        <Pedido pedido={pedido}></Pedido>
      </div>
    </>
  );
}

export default Pedidos;
