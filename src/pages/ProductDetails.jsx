import { useParams, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from "react-icons/md";
import { addtoCart } from '../slice/cartSlice';

const ProductDetails = () => {

  const dispatch = useDispatch();

  const productId = useParams()
  let location = useLocation();

  console.log(location.state)
  return (
    <section className="container">
      <div className="detail-container">
        <div>
          <img src={location.state.imagen} alt="image-product" />
        </div>
        <div>
          <h1>{location.state.productName}</h1>
          <div>
            {location.state.capacidad && <p>Capacidad: {location.state.capacidad}</p>}
            {location.state.chipset && <p>Chipset: {location.state.chipset}</p>}
          </div>
          <h1>{location.state.price}</h1>
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