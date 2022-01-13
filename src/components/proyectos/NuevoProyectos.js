import React, {useState,useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
const NuevoProyecto = () => {
    //Obtener state del formulario
    const proyectosContext =  useContext(proyectoContext)
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;
    //State para proyecto
    const [proyecto,guardarProyecto] = useState({
        nombre:''
    });
    // Extraer nombre de proyecto
    const {nombre}=proyecto;
    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }
    //Cuando el usaurio envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();
        //validar proyecto
        if(nombre === ''){
            mostrarError();
            return;
        }
        ////agregar state
        agregarProyecto(proyecto)
        //reiniciar form
    }
    return ( 
        <>
            <button
                type="button"
                className='btn btn-block btn-primario'
                onClick={()=>mostrarFormulario()}
            >Nuevo Proyectos</button>
            {
                formulario ?
                    (
                        <form
                            className='formulario-nuevo-proyecto'
                            onSubmit={onSubmitProyecto}
                        >
                            <input
                                type="text"
                                className='input-text'
                                placeholder='Nombre Proyecto'
                                name="nombre"
                                value={nombre}
                                onChange={onChangeProyecto}
                            />
                            <input 
                                type="submit"
                                className='btn btn-primario btn-block'
                                value="Agregar proyecto"
                            />
                        </form>
                    )
                :
                    null
            }
            {errorformulario ? <p className='mensaje error' >El nombre del proyecto es obligatorio</p> : null }
        </>
    );
}
 
export default NuevoProyecto;