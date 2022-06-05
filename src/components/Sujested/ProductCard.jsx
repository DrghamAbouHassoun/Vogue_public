import React from 'react'

const ProductCard = ({imageOne, imageTwo, description, price}) => {
  return (
    <div className="product-card">
        <div className="image-container">
        <img 
          src={imageOne} 
          alt="product" 
          className="first-image" 
        />
        <img src={imageTwo} alt="product two" className="second-image" />
        </div>
        <h1>{description || ""}</h1>
        <p>{price ? `${price} $` : ""}</p>
    </div>
  )
}

export default ProductCard