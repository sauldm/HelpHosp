const Pedido = ({ pedido }) => {
  return (
    <div>
      <p>ID: {pedido.id}</p>
      <p>Teléfono: {pedido.cliente_telefono}</p>
      <p>Domicilio: {pedido.cliente.domicilio}</p>
      <p>Forma de encargo: {pedido.formaDeEncargo}</p>
    </div>
  );
};

export default Pedido;
