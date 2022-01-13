import React, {useEffect,useContext} from 'react';
import Proyecto from "./Proyecto";
import proyectoContext from '../../context/proyectos/proyectoContext'
const ListadoProyectos = () => {
    //Extraer proyectos de state inicial
    const proyectosContext =  useContext(proyectoContext)
    const { proyectos, obtenerProyectos } = proyectosContext;
    //obtener proyectos cuadno carga el componente
    useEffect(()=>{
        obtenerProyectos()
    },[])
    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay proyectos, Comienza creando uno</p>;
    return ( 
        <ul className='listado-proyectos'>
            {
                proyectos.map(proyecto => (
                    <Proyecto key={proyecto.id} proyecto={proyecto}/>
                ))
            }
        </ul>
    );
}
 
export default ListadoProyectos;