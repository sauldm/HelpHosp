import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

/**
 * @component ModalCrearProducto
 * @description Modal para crear un nuevo producto con nombre, ingredientes y precio.
 */
const ModalCrearProducto = ({
  isModalProductoOpen,
  setisModalProductoOpen,
  alEnviar,
}) => {
  const [nombre, setNombre] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [precio, setPrecio] = useState(0.0);

  function isFormValido() {
    return nombre.trim() !== "" && ingredientes.trim() !== "" && precio > 0.0;
  }

  function manejarEnvio(e) {
    e.preventDefault();
    if (isFormValido()) {
      const nuevoProducto = {
        nombre,
        ingredientes,
        precio: parseFloat(precio),
      };
      alEnviar(nuevoProducto);
      setisModalProductoOpen(false);
    }
    setNombre("");
    setIngredientes("");
    setPrecio(0.0);
  }

  return (
    <ModalGeneral
      isModalOpen={isModalProductoOpen}
      setisModalOpen={setisModalProductoOpen}
      titulo="Nuevo Producto"
    >
      <p className="modal-description">
        Complete los detalles del nuevo producto a agregar al menú
      </p>
      <form onSubmit={manejarEnvio} className="modal-form">
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese el nombre del producto"
            required
          />
        </label>
        <label>
          Ingredientes
          <input
            type="text"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            placeholder="Ingrese los ingredientes"
            required
          />
        </label>

        <label>
          Precio
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </label>

        <button type="submit">Crear Producto</button>
      </form>
    </ModalGeneral>
  );
};

export default ModalCrearProducto;
