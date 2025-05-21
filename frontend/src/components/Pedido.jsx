const Pedido = ({ pedido }) => {
  return (
    <div>
      <p>ID: {pedido.id}</p>
      <p>Nombre: {pedido.nombreUsuario}</p>
      <p>Teléfono: {pedido.telefono}</p>
    </div>
  );
};

export default Pedido;
