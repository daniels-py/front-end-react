import React from "react";

const Paginador = ({ total, porPagina, pagina, setPagina }) => {
  const totalPaginas = Math.ceil(total / porPagina);

  return (
    <div className="paginador">
      {Array.from({ length: totalPaginas }, (_, i) => (
        <button
          key={i}
          className={pagina === i + 1 ? "activo" : ""}
          onClick={() => setPagina(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Paginador;
