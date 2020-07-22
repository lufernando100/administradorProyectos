import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, nombre: "Elegir Plataforma", estado: true, proyectoId: 1 },
      { id: 5, nombre: "Elegir Plataforma3", estado: true, proyectoId: 1 },
      { id: 2, nombre: "Elegir Plataforma2", estado: false, proyectoId: 2 },
      { id: 3, nombre: "Elegir Plataforma3", estado: false, proyectoId: 3 },
      { id: 4, nombre: "Elegir Plataforma4", estado: true, proyectoId: 4 },
      { id: 6, nombre: "Elegir Plataforma4", estado: true, proyectoId: 1},
    ],
    tareasproyecto: null,
    errortarea: false,
  };
  // Crear dispatch y state

  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // Crear las funciones

  // Obtener las tareas de un proyecto

  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };
  // Agregar una tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // Valida y muestra un error en caso de que sea necesario

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // Cambia el estado de cada tarea

  const cambiarEstadoTarea = (tarea) =>{
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea
    })

  }

  // Eliminar Tarea
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tarea,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
