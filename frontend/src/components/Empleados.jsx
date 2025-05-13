import { useState } from "react";

const Empleados = () => {
  const [ultimoClicado, setUltimoClicado] = useState();

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
