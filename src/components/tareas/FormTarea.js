import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
const FormTarea = () => {
    //Extraer si un proyecto esta activo
    const proyectosContext =  useContext(proyectoContext)
    const { proyecto } = proyectosContext;
    // obtener tareas del proyecto
    const tareasContext = useContext(tareaContext)
    const { errortarea, tareaseleccionada, obtenerTareas, agregarTarea, validarTarea, actualizarTarea } = tareasContext;

    //effect que detecta una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        }else{
            guardarTarea({nombre:''})
        }
    }, [tareaseleccionada])
    //State del formulario
    const [tarea,guardarTarea] = useState({
        nombre:'', 
    })
    //extraer nombre de la tarea
    const { nombre } = tarea;
    //si no hay proyectop seleccionado
    if(!proyecto) return null;

    const [proyectoActual] = proyecto;
    // Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]:e.target.value
        })
    }
    const onSubmit = e => {
        e.preventDefault()
        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }
        // si es edicion o si es una nueva tarea
        if(tareaseleccionada === null){
            //tarea nueva
            //agregar la nueva tarea al state de tareas
            console.log(proyectoActual)
            tarea.proyectoId = proyectoActual.id;
            tarea.estado=false;
            agregarTarea(tarea)
            //obtener y filtrar tareas del proyecto actual
            obtenerTareas(proyectoActual.id)
            //reiniciar form
            guardarTarea({
                nombre:''
            })
        }else{
            //actualizar tarea
            actualizarTarea(tarea);
        }
        
    }
    return (
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className='contenedor-input'>
                    <input
                        type="submit"
                        className='btn btn-primario btn-submit btn-block'
                        value={tareaseleccionada ? "Editar tarea" : "Agregar Tarea"}
                    />
                </div>
            </form>
            {errortarea? <p className='mensaje error' >El nombre de la tarea es obligatorio</p>: null}
        </div>
    );
}
 
export default FormTarea;