import { useState } from "react";
import { useEffect } from "react";
import supabase from "../bd/conecttobd";


const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase
        .from('products')
        .select()
      if (error) {
        console.log(error)
      }
      if (data) {
        setProducts(data)
      }
    }
    getProducts()
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
                <p key={p.id}>
                  <h4>{p.productName}</h4>
                </p>
              </div>
            ))}
          </article>
        )}
    </div>
  )
}

export default Home