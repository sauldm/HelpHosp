import { useState } from "react";

/**
 * @component Empleados
 * @description Componente que muestra una lista de botones de empleados seleccionables.
 * Permite seleccionar un empleado a la vez, resaltando visualmente la selección actual
 * y desactivando la selección anterior.
 * 
 * @returns {JSX.Element} Retorna un contenedor con botones de empleados seleccionables
 */
const Empleados = () => {
  /**
   * @state {HTMLElement|undefined} ultimoClicado - Referencia al último botón de empleado seleccionado
   */
  const [ultimoClicado, setUltimoClicado] = useState();

  /**
   * @function manejarClick
   * @description Maneja la selección de empleados, actualizando las clases CSS para
   * mostrar visualmente el empleado seleccionado
   * @param {React.MouseEvent} e - Evento del clic
   */
  const manejarClick = (e) => {
    if (ultimoClicado) {
      ultimoClicado.classList.remove("empleado-activo");
    }
    setUltimoClicado(e.target);
    e.target.classList.add("empleado-activo");
  };

  return (
    <div className="empleados">
      <button id="empleado1" onClick={manejarClick} className="btnEmpleado">
        ejemplo1
      </button>
      <button id="empleado2" onClick={manejarClick} className="btnEmpleado">
        ejemplo2
      </button>
      <button id="empleado3" onClick={manejarClick} className="btnEmpleado">
        ejemplo3
      </button>
    </div>
  );
};

export default Empleados;
