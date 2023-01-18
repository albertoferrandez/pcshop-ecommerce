import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from "react-icons/md";
import { addtoCart } from '../slice/cartSlice';

const ProductDetails = () => {

  const dispatch = useDispatch();

  let location = useLocation();

  console.log(location.state)
  return (
    <section className="container">
      <div className="detail-container">
        <div className="detail-img">
          <img src={location.state.imagen} alt="image-product" />
        </div>
        <div>
          <h1>{location.state.productName}</h1>
          <div className="detail-description">
            <h3>CARACTERÍSTICAS :</h3>
            <ul className="detail-list">
              {location.state.capacidad && <li>Capacidad: {location.state.capacidad}</li>}
              {location.state.chipset && <li>Chipset: {location.state.chipset}</li>}
            </ul>
          </div>
          <h1 className="detail-price">{location.state.price} €</h1>
          <div className='cart-button-container'>
            <button className='cart-button active'
              onClick={() =>
                dispatch(addtoCart({
                  id: location.state.id,
                  imagen: location.state.imagen,
                  productName: location.state.productName,
                  price: location.state.price,
                })
                )
              }>
              <span>AÑADIR AL CARRO</span> <MdAddShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails