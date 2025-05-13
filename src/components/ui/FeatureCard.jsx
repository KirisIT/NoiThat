import React from 'react'
import '../../assets/styles/FeatureCard.css'

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className='feature-card'>
      <div className='feature-icon'>{icon}</div>
      <h3 className='feature-title'>{title}</h3>
      <p className='feature-description'>{description}</p>
      <button className='feature-link'>
        Xem thêm <span>→</span>
      </button>
    </div>
  )
}

export default FeatureCard
