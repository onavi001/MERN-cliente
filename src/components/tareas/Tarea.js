import React, { useContext, useState } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
const Tarea = ({tarea}) => {
    // obtener tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { eliminarTarea, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        tarea.estado = !tarea.estado;
        cambiarEstadoTarea(tarea)
    }
    return (
        <>
            <li className='tarea sombra'>
                <p>{tarea.nombre}</p>
                <div className='estado'>
                    {
                        tarea.estado?
                        (
                            <button
                                type="button"
                                className='completo'
                                onClick={()=>cambiarEstado(tarea)}
                            >Completo</button>
                        )
                        :
                        (
                            <button
                                type="button"
                                className='incompleto'
                                onClick={()=>cambiarEstado(tarea)}
                            >Incompleto</button>
                        )
                    }
                </div>
                <div className='acciones'>
                    <button
                        type="button"
                        className='btn btn-primario'
                        onClick={()=>{guardarTareaActual(tarea)}}
                    >Editar</button>
                    <button
                        type="button"
                        className='btn btn-secundario'
                        onClick={()=>{eliminarTarea(tarea.id)}}
                    >Eliminar</button>
                </div>
            </li>
        </>
    );
}
 
export default Tarea;