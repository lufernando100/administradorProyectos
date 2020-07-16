import React, { useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTareas = () => {
  //Extraer si un proyecto está activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);

  const {
    agregarTarea,
    validarTarea,
    errortarea,
    obtenerTareas,
  } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  // Extraer el nombre del proyecto

  const { nombre } = tarea;

  // Si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para extraer el proyecto actual.
  const [proyectoActual] = proyecto;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...guardarTarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }
    // Pasar la validación

    // Reiniciar el formulario
    guardarTarea({
      nombre: "",
    });

    // Agregar la nueva tarea al state de tarea
    tarea.proyectoId = proyectoActual.id;
    tarea.estado = false;
    // Obtener areas
    obtenerTareas(proyectoActual.id);
    agregarTarea();
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre tarea.."
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-block- btn-primario"
            value="Agregar Tarea"
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">La tarea es obligatoria</p>
      ) : null}
    </div>
  );
};

export default FormTareas;
