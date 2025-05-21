import { useContext, useState } from "react";
import { ContextoProductos } from "./contexto/ProveedorProductos";

const AnyadirProducto = ({ producto }) => {
  const productos = useContext(ContextoProductos);

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
