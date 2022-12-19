import { useParams } from 'react-router-dom'

const ProductDetails = () => {


    const productId = useParams()
    //const thisProduct = .find(prod => prod.id === productId)


    console.log(productId)
  return (
   <div>
hola
   </div>
  )
}

export default ProductDetails