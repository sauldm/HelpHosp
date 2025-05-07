import { Link } from "react-router-dom";

const Pedido = ({ pedido }) => {
  return (
    <div className="pedido">
      <Link to={"/pedido"} state={{ pedido }}>
        {pedido.numero}
      </Link>
    </div>
  );
};

export default Pedido;
