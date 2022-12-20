import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const ProductDetails = () => {


    const productId = useParams()
    //const thisProduct = .find(prod => prod.id === productId)
    let location = useLocation();

    console.log(location.state)
  return (
   <div>
hola
   </div>
  )
}

export default ProductDetails