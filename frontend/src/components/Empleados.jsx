import { useState } from "react";

const Empleados = () => {
  const [ultimoClicado, setUltimoClicado] = useState();

  const manejarClick = (e) => {
    if (ultimoClicado) {
      ultimoClicado.style.backgroundColor = " rgba(182, 177, 171, 0.301)";
    }
    setUltimoClicado(e.target);
    e.target.style.backgroundColor = "red";
  };

  return (
    <div className="empleados">
      <button id="empleado1" onClick={manejarClick}>
        ejemplo1
      </button>
      <button id="empleado2" onClick={manejarClick}>
        ejemplo2
      </button>
      <button id="empleado3" onClick={manejarClick}>
        ejemplo3
      </button>
    </div>
  );
};

export default Empleados;
