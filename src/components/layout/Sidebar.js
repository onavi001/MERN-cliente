import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyectos';
import ListadoProyecto from '../proyectos/ListadoProyecto';
const Sidebar = () => {
    return (
        <aside>
            <h1>MERM<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className='proyectos'>
                <h2>Tus proyectos</h2>
                <ListadoProyecto/>
            </div>
        </aside>
    );
}
 
export default Sidebar;