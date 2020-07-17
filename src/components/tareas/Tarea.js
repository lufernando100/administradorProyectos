import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/ProyectoContext";


const Tarea = ({ tarea }) => {
  const tareasContext = useContext(tareaContext);
  const { eliminarTarea, obtenerTareas } = tareasContext;

  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const [proyectoActual]= proyecto
  // funcion para eliminar tarea
  const tareaEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
   
  };

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
        <button
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
