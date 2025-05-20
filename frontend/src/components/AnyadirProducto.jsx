import { useState } from "react";

const AnyadirProducto = ({ producto }) => {
  const [productos, setProductos] = useState();

  const fetchProductos = async () => {
    const respuesta = await fetch("../../json/productos.json", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(producto),
    });
  };
  fetchProductos();
};

export default AnyadirProducto;
