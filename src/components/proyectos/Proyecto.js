import React, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext';
const Proyecto = ({proyecto}) => {
    //obtener state de proyectos
    const proyectosContext =  useContext(proyectoContext)
    const { proyectoActual } = proyectosContext;
    // obtener la funcion de context de tarea
    const tareasContext = useContext(tareaContext)
    const { obtenerTareas } = tareasContext;
    //funcion para agregar proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id)//fijar un proyecto actual
        obtenerTareas(id)//filtrar las tareas cuando se le de click
    }
    return ( 
        <li>
            <button
                type="button"
                className='btn btn-blank'
                onClick={()=>seleccionarProyecto(proyecto.id)}
            >{proyecto.nombre}</button>
        </li>
    );
}
 
export default Proyecto;