import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalGeneral from "./ModalGeneral";

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
    } else {
      setNombre("");
      setIngredientes("");
      setPrecio(0.0);
    }
  }

  return (
    <ModalGeneral
      isModalOpen={isModalProductoOpen}
      setisModalOpen={setisModalProductoOpen}
    >
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <label>
          Ingredientes:
          <input
            type="text"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
          />
        </label>

        <label>
          Precio:
          <input
            type="text"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
            pattern="^\d+(\.\d{1,2})?$"
          />
        </label>

        <input type="submit" value="Crear Producto" />
      </form>
    </ModalGeneral>
  );
};

export default ModalCrearProducto;
