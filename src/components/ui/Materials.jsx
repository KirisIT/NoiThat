import React from 'react'
import '../../assets/styles/Materials.css'

const Materials = ({ materials }) => {
  return (
    <section className='materials-section'>
      <div className='container'>
        <div className='materials-content'>
          <div className='materials-text'>
            <span className='section-label'>Materials</span>
            <span className='section-title'>Very Serious Materials For Making Furniture</span>
            <p className='section-description'>
              Because panto was very serious about designing furniture for our environment, using a very expensive and
              famous capital but at a relatively low price
            </p>
            <a href='/materials' className='read-more'>
              More Info
            </a>
          </div>

          <div className='materials-gallery'>
            {materials && materials.length > 0 && (
              <>
                <div className='gallery-item'>
                  <img src={materials[0]} alt='Modern chair' loading='lazy' />
                </div>
                <div className='gallery-item'>
                  <img src={materials[1]} alt='Interior sofa' loading='lazy' />
                </div>
                <div className='gallery-item'>
                  <img src={materials[2]} alt='Wooden chairs' loading='lazy' />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materials
