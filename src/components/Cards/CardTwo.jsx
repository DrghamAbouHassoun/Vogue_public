import React from 'react'

const CardTwo = ({image, title, description, price}) => {
  return (
    <div className="card-two">
        <div className="card-two-header">
            <img src={image} alt="Product one" />
        </div>
        <div className="card-two-body">
            <h1 className="card-two-title">
                <span>{title}</span>
                <span>$ {price}</span>
            </h1>
            <p className="card-two-description">{description}</p>
        </div>
    </div>
  )
}

export default CardTwo