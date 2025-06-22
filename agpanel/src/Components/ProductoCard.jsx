import React from "react";
import "./Catalogo.css"
const ProductoCard = ({ producto }) => {
  return (
    <div className="producto-card">
      {producto.imagen ? (
        <img src={`http://localhost:8000${producto.imagen}`} alt={producto.nombre} />
      ) : (
        <div className="sin-imagen">Sin imagen</div>
      )}
      <h4>{producto.nombre}</h4>
      <p><strong>${producto.precio}</strong></p>
      <p>{producto.descripcion}</p>
      <button>Más info</button>
    </div>
  );
};

export default ProductoCard;
