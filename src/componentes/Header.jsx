import { useState, useEffect, useRef } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import Cart from "./Cart";


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
    

    const cart = useSelector(state => state.cart)
    const cant = useSelector(state => state.cantTotal)


    return (
        <header className="section">
            <div className="container">
                <h1 className='main-title'>pcSHOP</h1>

                <div className='search-element'>
                    <form>
                        <input type="text" />
                        <button className='button-form'>
                            <AiOutlineSearch size={15} />
                        </button>
                    </form>
                </div>

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