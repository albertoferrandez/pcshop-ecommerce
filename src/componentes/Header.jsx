import { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import FormSearch from "./FormSearch";

const Header = () => {

    let sideCart = useRef(null);

    const [isOpen, setOpen] = useState(false)

    let handler = (e) =>{
        if(sideCart.current && !sideCart.current.contains(e.target)){
            setOpen(false);
        }
      };
    useEffect(() => {
      document.addEventListener("mousedown", handler);
      return()=>{
        document.removeEventListener("mousedown", handler);
      }
    }, [])
    
    const cant = useSelector(state => state.cantTotal)

    return (
        <header className="section">
            <div className="container">
                <h1 className='main-title'>pcSHOP</h1>
                <FormSearch/>
                <div className="carrito">
                    <span>{cant}</span>
                    <button onClick={() => setOpen(!isOpen)}>
                        <AiOutlineShoppingCart size={36} />
                    </button>
                    <div ref={sideCart}>
                    {
                        isOpen && <Cart /> 
                    }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header