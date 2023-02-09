import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import supabase from "../bd/conecttobd";
import cart from  '../assets/cartplus.svg'

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
        <article className="grid items-center grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-7">
          {products.map(p => (
            <div class="flex items-center justify-center flex-col w-full md:w-[85%] lg:w-[70%] h-[280px] md:h-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <Link to={`/componentes/${productID.compID}/${p.id}`} state={p} relative="path">
                <img class="h-[150px] mx-auto py-4" src={p.imagen} alt={p.productName} />
                <div class="md:px-2 md:py-4 px-1 py-2">
                  <h3 class="text-sm mb-2 mt-2 text-center">{p.productName}</h3>
                </div>
                <div class="mt-3">
                  <h3 class="text-xl font-bold text-black text-center">{p.price} €</h3>
                </div>
              </Link>
            </div>
          ))}
        </article>
      )}
    </div>
  )
}

export default ComponentesPc
