import React from 'react'
import '../../assets/styles/ProductCard.css'

const ProductCard = ({ product }) => {
  const { name, category, price, rating, image } = product
  const renderStars = () => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : ''}`}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={image} alt={name} className='product-img' />
      </div>
      <div className='product-info'>
        <p className='product-category'>{category}</p>
        <h3 className='product-name'>{name}</h3>
        <div className='product-rating'>{renderStars()}</div>
        <div className='product-price-container'>
          <span className='product-price'>${price}</span>
          <button className='add-to-cart-button'>
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
