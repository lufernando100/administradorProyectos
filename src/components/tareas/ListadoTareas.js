import React, { Fragment } from "react";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Plataforma2", estado: false },

    { nombre: "Elegir Plataforma3", estado: false },
    { nombre: "Elegir Plataforma4", estado: true },
  ];
  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li>
            <p>No hay tareas</p>{" "}
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button 
      type="button"
      className="btn btn-eliminar"
      >Eliminar Proyecto &times;</button>
    </Fragment>
  );
};

export default ListadoTareas;
