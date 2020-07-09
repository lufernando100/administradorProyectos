import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuevaCuenta = () => {
  const [usuario, guardarUsuario] = useState({
    email: "",
    nombre: "",
    password: "",
    confirmar: "",
  });
  // extraer datos de usuario
  const { email, nombre, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //validar campos vacios

    // VAlidar password minimo 6 caracteres

    // Validar password no coincide

    //Pasarlo al action
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear Nueva Cuenta</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Ingresa tu Username</label>
            <input
              autoComplete="off"
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingresa tu  Usuario"
              onChange={onChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              autoComplete="off"
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu  Email"
              onChange={onChange}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingresa tu Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Confirmar Password</label>
            <input
              type="password"
              id="password"
              name="confirmar"
              placeholder="Confirma tu Password"
              onChange={onChange}
              value={confirmar}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrar Cuenta"
              placeholder="Registrar Cuenta"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Página de Login
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
