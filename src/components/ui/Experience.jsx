import React from 'react'

const Experience = ({ image }) => {
  return (
    <section className='experience-section'>
      <div className='container'>
        <div className='experience-content'>
          <div className='experience-image'>
            <img src={image} alt='Experience' />
          </div>
          <div className='experience-text '>
            <span className='section-label'>Experience</span>
            <h2 className='section-title'>
              We Provide You The <br />
              Best Experience
            </h2>
            <p className='section-description'>
              You don't have to worry about the result because all of these interiors are made by people who are
              professionals in their fields with an elegant and luxurious style and with premium quality materials
            </p>
            <a href='/about' className='read-more'>
              More Info
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
