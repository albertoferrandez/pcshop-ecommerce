import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {

  const cart = useSelector(state => state.cart)
  const cant = useSelector(state => state.cantTotal)

  return (
    <div className='side-cart'>
      <h3>Mi carrito</h3>
      <hr/>
      {cart.length === 0 ?
        <p>AÑADE UN PRODUCTO AL CARRO</p> : 
        cart.map(product => (
          <div className='side-cart-product' key={product.id}>
            <div>
              <img src={product.imagen} alt='producto'/>
            </div>
            <h4>{product.productName}</h4>
            <p>{product.cantidad}</p>
          </div>
        ))
      }

      <p>Total Productos: {cant}</p>
    </div>
  )
}

export default Cart