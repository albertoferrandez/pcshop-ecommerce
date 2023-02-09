import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletefromCart } from '../slice/cartSlice'
import close from '../assets/close.svg'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const cant = useSelector(state => state.cantTotal)
  const dispatch = useDispatch();

  return (
    <div className='absolute z-10 right-0 bg-cyan-400 rounded w-96'>
      <div className='flex justify-between items-center px-8 py-4'>
        <h3>Mi carrito</h3>
        <button className="w-8 h-8">
          <img src={close} alt='' />
        </button>
      </div>

      <hr />
      {cart.length === 0 ?
        <p className='text-center'>AÑADE UN PRODUCTO AL CARRO</p> :

        <div className="w-screen max-w-sm p-8 pt-4">
          {
            cart.map(product => (
              <div key={product.id} className="mt-6 space-y-6">
                <ul>
                  <li className="flex items-center py-5">
                    <img src={product.imagen} alt={product.productName}
                      className="object-cover w-16 h-16 rounded"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm text-gray-900">{product.productName}</h3>
                    </div>
                    <div className="flex items-center justify-end flex-1 gap-2">
                      <div>{product.cantidad}</div>
                      <button onClick={() => dispatch(deletefromCart(product))} className="text-neutral-300">
                        remove
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))
          }
          <div className="space-y-4 text-center">
            <a
              href="#"
              className="block px-5 py-3 text-sm text-gray-600 transition border border-gray-600 rounded hover:ring-1 hover:ring-gray-400"
            >
              View my cart ({cant})
            </a>

            <a
              href="#"
              className="block px-5 py-3 text-sm text-gray-100 transition bg-gray-700 rounded hover:bg-gray-600"
            >
              Checkout
            </a>

            <a
              href="#"
              className="inline-block text-sm text-gray-500 underline transition underline-offset-4 hover:text-gray-600"
            >
              Continue shopping
            </a>
          </div>
        </div>
      }
    </div>

  )
}

export default Cart


