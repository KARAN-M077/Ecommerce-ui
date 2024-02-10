import React, { useContext } from 'react'
import Displayproduct from '../Displayproduct/Displayproduct'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/Shopcontext'
import Relatedproduct from '../Relatedproduct/Relatedproduct'


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  console.log(product)
  return (
    <div>
      <Displayproduct product={product}/>
      <Relatedproduct />
      
    </div>
  )
}

export default Product
