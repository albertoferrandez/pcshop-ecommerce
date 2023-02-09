import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import cart from '../assets/cart.svg'

const Header = () => {

    let sideCart = useRef(null);

    const [isOpen, setOpen] = useState(false)

    let handler = (e) => {
        if (sideCart.current && !sideCart.current.contains(e.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    }, [])

    const cant = useSelector(state => state.cantTotal)

    return (
        <header className="w-screen flex justify-between items-center px-14 h-20 md:h-44 bg-neutral-800">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">pcSHOP</h1>
            <div className="relative">
                <span className="text-white">{cant}</span>
                <button onClick={() => setOpen(!isOpen)}>
                    <img src={cart} alt="cart" width={30} height={30}/>
                </button>
                <div ref={sideCart}>
                    {
                        isOpen && <Cart />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header