import { useState, useEffect } from "react";
import { getAllProducts } from "../services/getAllProducts";

const Home = () => {

  const [products, setProducts] = useState([])

  const getItems = async () => {
    const AllProducts = await getAllProducts()
    setProducts(AllProducts)
  }

  useEffect(() => {
    getItems()
  }, [])

  return (
    <div className="p-7 h-screen overflow-auto w-full">
      <div className="text-2xl text-center font-semibold">
        <h2>LOS MEJORES PRODUCTOS</h2>
      </div>
      {products && (
        <article className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-7">
          {products.map(p => (
            <div className="flex items-center rounded-md" key={p.id}>
              <div className="container mx-auto h-full p-2 bg-white max-w-sm rounded-md 
              overflow-hidden shadow hover:shadow-md transition duration-300">
                <img className="h-4/6 mx-auto object-cover" src={p.imagen} alt={p.productName} />
                <div class="h-2/6 flex flex-col justify-between items-center">
                  <h1 class="text-[0.5rem] md:text-sm font-semibold">{p.productName}</h1>
                  <p class="mt-2">{p.price} €</p>
                </div>
              </div>
            </div>
          ))}
        </article>
      )}
    </div>
  )
}

export default Home

