/**
 * @fileoverview Punto de entrada principal de la aplicación React
 * @description Este archivo configura el renderizado inicial de la aplicación,
 * establece el elemento raíz para los modales de react-modal y renderiza el
 * componente App dentro de StrictMode para garantizar mejores prácticas de desarrollo.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "react-modal";

/**
 * @description Configura el elemento raíz para los modales de react-modal
 * Esto es necesario para la accesibilidad y el correcto funcionamiento de los modales
 */
Modal.setAppElement("#root");

/**
 * @description Renderiza la aplicación en el elemento root del DOM
 * Utiliza StrictMode para detectar posibles problemas en la aplicación
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
