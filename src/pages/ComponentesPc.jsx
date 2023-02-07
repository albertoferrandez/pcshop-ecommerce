import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import supabase from "../bd/conecttobd";

const ComponentesPc = () => {

  const [products, setProducts] = useState([]);

  let productID = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
        .eq('component', `${productID.compID}`)
      if (error) {
        console.log(error)
      }
      if (data) {
        setProducts(data)
        console.log(data)
      }
    }
    getProducts()
  }, [productID])

  return (
    <div className="p-7 h-screen overflow-auto w-full">
      <div className="text-2xl text-center font-semibold">
        <h1>{productID.compID.toLocaleUpperCase()}</h1>
      </div>
      {products && (
        <article className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-7">
          {products.map(p => (
            <Link to={`/componentes/${productID.compID}/${p.id}`} state={p} relative="path">
              <div class="group flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                  <img class="peer absolute top-0 right-0 h-full w-full object-contain" src={p.imagen} alt="product image" />
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">{p.productName}</h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between">
                    <p>
                      <span class="text-3xl font-bold text-slate-900">{p.price} €</span>
                      <span class="text-sm text-slate-900 line-through">$699</span>
                    </p>
                  </div>
                  <a href="#" class="flex items-center justify-center rounded-md bg-neutral-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a
                  >
                </div>
              </div>

            </Link>
          ))}
        </article>
      )}
    </div>
  )
}

export default ComponentesPc
