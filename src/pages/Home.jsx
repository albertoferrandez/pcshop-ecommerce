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
    <section className="p-7 h-screen overflow-auto w-full">
      <div className="text-2xl text-center font-semibold">
        <h2>LOS MEJORES PRODUCTOS</h2>
      </div>
      {products && (
        <article className="grid items-center grid-cols-2 gap-4 md:grid-cols-4 mt-7">
          {products.map(p => (
            <div key={p.id} className="flex items-center justify-center flex-col w-full md:w-[85%] lg:w-[70%] h-[280px] md:h-[350px] overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
              <img className="h-[150px] mx-auto py-4" src={p.imagen} alt={p.productName} />
              <div className="md:px-2 md:py-4 px-1 py-2">
                <h3 className="text-sm mb-2 mt-2 text-center">{p.productName}</h3>
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-black text-center">{p.price} €</h3>
              </div>
            </div>
          ))}
        </article>
      )}
    </section>
  )
}

export default Home

