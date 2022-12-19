import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./Sidebar";
import { useState } from "react";

const NavBar = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <nav className="lg-screen">
        <div>
          <NavLink to={`/`}>INICIO</NavLink>
          <NavLink to={`componentes/Procesadores`} >PROCESADORES</NavLink>
          <NavLink to={`componentes/PlacasBase`}>PLACAS BASE</NavLink>
          <NavLink to={`componentes/Ram`}>RAM</NavLink>
          <NavLink to={`componentes/fuentes de alimentación`}>FUENTES DE ALIMENTACIÓN</NavLink>
          <NavLink to={`componentes/tarjetas graficas`}>TARJETAS GRÁFICAS</NavLink>
          <NavLink to={`componentes/torres`}>TORRES/CAJAS</NavLink>
        </div>
      </nav>

      <button className="mv-menu-button" onClick={() => setOpen(!isOpen)}>
        <AiOutlineMenu size={24} />
      </button>
        {
          isOpen && <Sidebar />
        }
    </>

  )
}

export default NavBar