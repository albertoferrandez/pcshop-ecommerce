import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import supabase from "../bd/conecttobd";
import { useDispatch } from 'react-redux';
import { addtoCart } from '../slice/cartSlice';
import { MdAddShoppingCart } from "react-icons/md";

const ComponentesPc = () => {

  let productID = useParams();
  const dispatch = useDispatch();

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
              <div className="card-img">
                <img src={p.imagen} alt="product-img" />
              </div>
              <div >
                <h4>{p.productName}</h4>
              </div>
              <div className='precio-button'>
                <span>{p.price} €</span>
                <button className='active'
                  onClick={() =>
                    dispatch(addtoCart({
                      id: p.id,
                      imagen: p.imagen,
                      productName: p.productName,
                      price: p.price,
                    })
                    )
                  }>
                  <MdAddShoppingCart/>
                </button>
              </div>
            </div>
          ))}
        </article>
      )}
    </div>

  )
}

export default ComponentesPc