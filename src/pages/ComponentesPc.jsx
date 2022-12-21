import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import supabase from "../bd/conecttobd";


const ComponentesPc = () => {

  let productID = useParams();

  const [products, setProducts] = useState([]);

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
    <div>
      <div className='title-container'>
        <h1>{productID.compID.toLocaleUpperCase()}</h1>
      </div>
      {products && (
        <article className="products-cont">
          {products.map(p => (
            <div className="card-product" key={p.id}>
              <Link to={`/componentes/${productID.compID}/${p.id}`}  state={p} relative="path">
                <div className="card-img">
                  <img src={p.imagen} alt="product-img" />
                </div>
                <div >
                  <h4>{p.productName}</h4>
                </div>
                <div className='precio'>
                  <span>{p.price} €</span>
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