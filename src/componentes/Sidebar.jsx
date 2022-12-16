import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <nav className='sidebar'>
            <div>
                <NavLink to={`/`}>INICIO</NavLink>
                <NavLink to={`componentes/procesadores`}>PROCESADOR</NavLink>
                <NavLink to={`componentes/placasbase`}>PLACAS BASE</NavLink>
                <NavLink to={`componentes/ram`}>RAM</NavLink>
                <NavLink to={`componentes/fuentes de alimentación`}>FUENTES DE ALIMENTACIÓN</NavLink>
                <NavLink to={`componentes/tarjetas graficas`}>TARJETAS GRÁFICAS</NavLink>
                <NavLink to={`componentes/torres`}>TORRES/CAJAS</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar