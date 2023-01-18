import { useState, useEffect } from "react";
import { getAllProducts } from "../services/getAllProducts";

const Home = () => {

  const [products, setProducts] = useState([])

  const getItems = async() => {
    const AllProducts = await getAllProducts()
    setProducts(AllProducts)
  }
  
  useEffect(() => {
    getItems()
  }, [])

  return (
    <div>
      <div className="title-container">
        <h2>LOS MEJORES PRODUCTOS</h2>
      </div>
        {products && (
          <article className="products-cont">
            {products.map(p => (
              <div className="card-product" key={p.id}>
                <div className="card-img">
                  <img src={p.imagen} alt="product-img"/>
                </div>
                <div>
                  <h4>{p.productName}</h4>
                </div>
              </div>
            ))}
          </article>
            )}
    </div>
  )
}

export default Home