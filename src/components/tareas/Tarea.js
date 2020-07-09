import React from "react";

const Tarea = ({ tarea }) => {
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="Incompleto">
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
          <button className="btn btn-primario">Editar</button>
          <button className="btn btn-secundario">Eliminar</button>
      </div>
    </li>
  );
};

export default Tarea;
