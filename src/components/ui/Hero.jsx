import React, { useState } from 'react'
import '../../assets/styles/Hero.css'

const Hero = () => {
  const [selectedColor, setSelectedColor] = useState('orange')

  const handleColorChange = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className='hero-section'>
      <div className='container'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Make Your Interior More
            <br />
            Minimalistic & Modern
          </h1>
          <p className='hero-subtitle'>
            Turn your room with panto into a lot more minimalist
            <br />
            and modern with ease and speed
          </p>
          <div className='search-container'>
            <input type='text' placeholder='Search furniture' className='search-input' />
            <button className='search-button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='search-icon'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>

        <div className='main-image'>
          <div className='image-container'></div>
          <div className='color-selector-container'></div>
          <div className='product-hotspot flower-pot'>
            <div className='color-hotspot-container'>
              <div className='color-selector'>
                <button
                  className={`color-btn orange ${selectedColor === 'orange' ? 'active' : ''}`}
                  onClick={() => handleColorChange('orange')}
                >
                  {selectedColor === 'orange' && (
                    <svg className='check-icon' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
                    </svg>
                  )}
                </button>
                <button
                  className={`color-btn cyan ${selectedColor === 'cyan' ? 'active' : ''}`}
                  onClick={() => handleColorChange('cyan')}
                ></button>
                <button
                  className={`color-btn gray ${selectedColor === 'gray' ? 'active' : ''}`}
                  onClick={() => handleColorChange('gray')}
                ></button>
              </div>

              <button className='hotspot-btn'>
                <span className='hotspot-dot'></span>
                <span className='pulse'></span>
                <span className='plus-h'></span>
                <span className='plus-v'></span>
              </button>
            </div>
          </div>

          <div className='product-hotspot plant-right'>
            <button className='hotspot-btn'>
              <span className='hotspot-dot'></span>
              <span className='pulse'></span>
              <span className='plus-h'></span>
              <span className='plus-v'></span>
            </button>
          </div>

          <div className='product-hotspot decoration'>
            <button className='hotspot-btn'>
              <span className='hotspot-dot'></span>
              <span className='pulse'></span>
              <span className='plus-h'></span>
              <span className='plus-v'></span>
            </button>
          </div>

          <div className='product-hotspot coffee-table'>
            <button className='hotspot-btn'>
              <span className='hotspot-dot'></span>
              <span className='pulse'></span>
              <span className='plus-h'></span>
              <span className='plus-v'></span>
            </button>
          </div>

          <div className='product-hotspot side-ottoman'>
            <button className='hotspot-btn'>
              <span className='hotspot-dot'></span>
              <span className='pulse'></span>
              <span className='plus-h'></span>
              <span className='plus-v'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
