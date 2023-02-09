import { NavLink } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { useState } from "react";
import cpu from "../assets/cpu.svg"
import caja from "../assets/caja.svg"
import gpu from "../assets/gpu.svg"
import home from "../assets/home.svg"
import placa from "../assets/placa.svg"
import ram from "../assets/ram.svg"
import fa from "../assets/fa.svg"


const NavBar = () => {

  const [open, setOpen] = useState(true)

  const Links = [
    { title: "INICIO", src: `/`, logo: home },
    { title: "PROCESADORES", src: `componentes/Procesadores`, logo: cpu },
    { title: "PLACAS BASE", src: `componentes/Placas Base`, logo: placa },
    { title: "RAM", src: `componentes/Ram`, logo: ram },
    { title: "FUENTES DE ALIMENTACIÓN", src: `componentes/fuentes de alimentación`, logo: fa },
    { title: "TARJETAS GRÁFICAS", src: `componentes/tarjetas graficas`, logo: gpu },
    { title: "TORRES/CAJAS", src: `componentes/torres`, logo: caja },
  ]

  return (
    <>
      <aside className={`${open ? 'w-36 md:w-72' : 'w-16 md:w-20'}  h-screen bg-neutral-800 
      relative duration-300 p-3 pt-5 md:p-5 md:pt-8`}>
        <BsArrowLeftSquareFill className={`absolute cursor-pointer -right-3 
          top-9 w-7 rounded-md ${!open && "rotate-180"} fill-slate-400 w-6 h-6`} onClick={() => setOpen(!open)} />
        {
          Links.map((link) => (
            <NavLink key={link.title} to={link.src} className="flex flex-col  md:flex-row md:gap-x-4 items-center 
            mt-8 hover:bg-neutral-600 rounded-md p-2" >
              <img src={link.logo} alt={link.title} className={`cursor-pointer duration-500 w-8 h-8`} />
              <span className={`text-white pt-2 md:pt-0 origin-left font-medium text-center text-xs md:text-sm
          duration-300 ${!open && "scale-0"}`}>{link.title}</span>
            </NavLink>
          ))
        }
      </aside>
    </>
  )
}

export default NavBar
