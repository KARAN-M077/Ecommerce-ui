import React from 'react'
import './displayproduct.css'

const Displayproduct = (props) => {
    const {product} = props;
  return (
    <>
      <div className="productdisplay">
      <h1>{product.name}</h1>
      <div className="product-description">
            {product.description}
        </div>
        <div className="product-left">
        
            <div className="product-img-list">
                <img src={product.image} alt='product.png'/>
                <img src={product.image} alt='product.png'/>
                <img src={product.image} alt='product.png'/>
                <img src={product.image} alt='product.png'/>
                <img src={product.image} alt='product.png'/>
          
            </div>
            <div className="product-img">
                <img className='product-main' src={product.image} alt='product.png'/>
            </div>
        </div>
      <div div className="product-right">
        
        <div className="product-price">
            <div className="new-price">${product.new_price}</div>
            <div className="old-price">${product.old_price}</div>
        </div>
        
        <div className="product-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        <button>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default Displayproduct
