import { useState, useEffect } from "react";
import ModalGeneral from "./ModalGeneral";

const ModalObservaciones = ({
  alEnviar,
  isModalObservacionesOpen,
  setIsModalObservacionesOpen,
  valorInicial,
}) => {
  const [observacion, setObservacion] = useState(valorInicial || "");

  useEffect(() => {
    setObservacion(valorInicial || "");
  }, [valorInicial, isModalObservacionesOpen]);

  function manejarEnvio(e) {
    e.preventDefault();
    alEnviar(observacion);
    setIsModalObservacionesOpen(false);
  }

  return (
    <ModalGeneral
      isModalOpen={isModalObservacionesOpen}
      setisModalOpen={setIsModalObservacionesOpen}
    >
      <form onSubmit={manejarEnvio}>
        <label>
          Observación:
          <input
            type="text"
            value={observacion}
            onChange={(e) => setObservacion(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Crear Observación" />
      </form>
    </ModalGeneral>
  );
};

export default ModalObservaciones;
