import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {
  // State para proyecto
  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });

  // Extraer nombre de proyecto

  const { nombre } = proyecto;

  // Lee los contenidos del inputa
  const onChange = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };
  // Cuando el usuario envía un proyecto

  const onSubmitProyecto = (e) => {
    e.preventDefault();
    // Validar el proyecto

    // Agregar el State

    //Reiniciar el form
  };

  return (
    <Fragment>
      <button className="btn btn-block btn-primario">Nuevo Proyecto</button>
      <form className="formulario-nuevo-proyecto"
      onSubmit={onSubmitProyecto}
      >
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
    </Fragment>
  );
};

export default NuevoProyecto;
