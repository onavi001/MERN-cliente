import React, { useReducer } from 'react'
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import {v4 as uuid} from 'uuid';
import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA
} from '../../types'
const TareaState = props => {
    const initialState = {
        tareas: [
            {id:1,nombre:'Elegir Plataforma', estado:true, proyectoId:1},
            {id:2,nombre:'Elegir colores', estado:false, proyectoId:2},
            {id:3,nombre:'Elegir Plataforma de pago', estado:false, proyectoId:3},
            {id:4,nombre:'Elegir Hosting', estado:true, proyectoId:4},
            {id:5,nombre:'Elegir Plataforma', estado:true, proyectoId:4},
            {id:6,nombre:'Elegir colores', estado:false, proyectoId:3},
            {id:7,nombre:'Elegir Plataforma de pago', estado:false, proyectoId:2},
            {id:8,nombre:'Elegir Hosting', estado:true, proyectoId:1}
        ],
        tareasproyecto:null,
        errortarea:false,
        tareaseleccionada:null,
    }
    //crear dispatch y state
    const [state,dispatch] = useReducer(TareaReducer,initialState);

    // crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type:AGREGAR_TAREA,
            payload:tarea
        })
    }

    // valida y muestra un error en caso de que sea neceario
    const validarTarea = () => {
        dispatch({
            type:VALIDAR_TAREA
        })
    }
    //eliminar tarea por id
    const eliminarTarea = id => {
        console.log(id)
        dispatch({
            type:ELIMINAR_TAREA,
            payload:id
        })
    }
    //cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type:ESTADO_TAREA,
            payload:tarea
        })
    }
    //extrae una tarea para edicion
    const guardarTareaActual = tarea => {
        dispatch({
            type:TAREA_ACTUAL,
            payload:tarea
        })
    }
    //edita una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type:ACTUALIZAR_TAREA,
            payload: tarea
        })
    }
    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea:state.errortarea,
                tareaseleccionada:state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}
export default TareaState;