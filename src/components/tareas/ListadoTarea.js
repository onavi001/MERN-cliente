import React, {useState,useContext} from 'react';
import Tarea from "./Tarea";
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from "react-transition-group";
const ListadoTareas = () => {
    //obtener state de proyecto
    const proyectosContext =  useContext(proyectoContext)
    const { proyecto, eliminarProyecto } = proyectosContext;
    // obtener tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { tareasproyecto } = tareasContext;
    //si no hay proyectop seleccionado
    if(!proyecto) return <h2>Selecciona un proyectos</h2>
    //array destructuring para extraer proyecto actual
    const [proyectoActual]=proyecto;
    const tareasProyecto = []
    
    return (
        <>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className='listado-tareas'>
                {
                    tareasproyecto === null || tareasproyecto.length===0 ?
                        (<li className='tarea'><p>No hay tareas</p></li>)
                    :
                        <TransitionGroup>
                            {
                                tareasproyecto.map(tarea => (
                                    <CSSTransition 
                                        key={tarea.id} 
                                        time={200}
                                        classNames='tarea'
                                    >
                                        <Tarea 
                                            tarea={tarea}
                                        />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                }
            </ul>
            <button
                    type="button"
                    className='btn btn-eliminar'
                    onClick={()=>{eliminarProyecto(proyectoActual.id)}}
            >Eliminar Proyecto &times;</button>
        </>
    );
}
 
export default ListadoTareas;