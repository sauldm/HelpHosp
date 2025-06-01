/**
 * @component Producto
 * @description Componente que representa visualmente un producto individual.
 * Muestra el nombre del producto en un contenedor con estilo.
 * 
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.producto - Objeto con la información del producto
 * @param {string} props.producto.nombre - Nombre del producto a mostrar
 * 
 * @returns {JSX.Element} Retorna un contenedor con el nombre del producto
 */
const Producto = ({ producto }) => {
  return (
    <>
      <div className="producto">
        <div className="imgProducto"> {producto.nombre}</div>
      </div>
    </>
  );
};

export default Producto;
