import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletefromCart } from '../slice/cartSlice'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const cant = useSelector(state => state.cantTotal)
  const dispatch = useDispatch();

  return (
    <div className='side-cart'>
      <h3>Mi carrito</h3>
      <hr />
      {cart.length === 0 ?
        <p>AÑADE UN PRODUCTO AL CARRO</p> :
        cart.map(product => (
          <div className='side-cart-product' key={product.id}>
            <div className='cart-product-img'>
              <img src={product.imagen} alt='producto' />
            </div>
            <div className='cart-product-details'>
              <h4>{product.productName}</h4>
              <p>Cant: {product.cantidad} - Precio: {product.price} €</p>
              <button onClick={() => dispatch(deletefromCart(product))}>x</button>
            </div>
          </div>
        ))
      }

      <p className='total-products'>Total Productos: {cant}</p>
    </div>
  )
}

export default Cart