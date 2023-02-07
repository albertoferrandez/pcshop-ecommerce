import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { MdAddShoppingCart } from "react-icons/md";
import { addtoCart } from '../slice/cartSlice';

const ProductDetails = () => {

  const dispatch = useDispatch();

  let location = useLocation();

  return (

    <section class="w-full mx-auto ">
      <div className="w-[75%] mx-auto mt-7 grid grid-cols-1 md:grid-cols-2 p-7">
        <div className="">
          <img class="h-full w-full max-w-full object-cover" src={location.state.imagen} alt="" />
        </div>

        <div class="">
          <h1 class="text-center text-2xl font-bold text-gray-900 sm:text-3xl space-y-4 border-t border-b py-4">{location.state.productName}</h1>

          <div className="h-3/5 p-4 text-gray-500">
            <h3>CARACTERÍSTICAS :</h3>
            <ul className="detail-list">
              {location.state.capacidad && <li>Capacidad: {location.state.capacidad}</li>}
              {location.state.chipset && <li>Chipset: {location.state.chipset}</li>}
            </ul>
          </div>

          <div class="flex flex-col items-center 
          justify-between space-y-4 border-t border-b py-4 sm:flex-row 
          sm:space-y-0">
            <div class="flex items-end">
              <h1 class="text-3xl font-bold">{location.state.price} €</h1>
            </div>

            <button type="button" onClick={() =>
              dispatch(addtoCart({
                id: location.state.id,
                imagen: location.state.imagen,
                productName: location.state.productName,
                price: location.state.price,
              })
              )
            }
              class="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base 
              font-bold text-white transition-all duration-200 
              ease-in-out focus:shadow hover:bg-gray-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>

  )
}

export default ProductDetails
