import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/ProyectoContext";

const NuevoProyecto = () => {
  //Obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario,
    errorformulario,
    mostrarFormulario,
    agregarProyecto,
    mostrarError,
  } = proyectosContext;
  // State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre de proyecto

  const { nombre } = proyecto;

  // Lee los contenidos del input
  const onChange = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  // Cuando el usuario envía un proyecto

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    mostrarError();
    // Validar el proyecto
    if (nombre === "") {
      return;
    }

    // Agregar el State
    agregarProyecto(proyecto);

    //Reiniciar el form
    /* guardarProyecto({
      nombre=""
    }) */
  };

  return (
    <Fragment>
      <button
        className="btn btn-block btn-primario"
        onClick={() => mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onChange}
          />

          <input
            type="submit"
            className="btn btn-block btn-primario"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>: null}
    </Fragment>
  );
};

export default NuevoProyecto;
