import React from 'react'
import FeatureCard from './FeatureCard'
import '../../assets/styles/Features.css'

const Features = ({ features }) => {
  return (
    <section className='features-section'>
      <div className='container'>
        <div className='section-header'>
          <div className='section-intro'>
            <h2>
              Why <br />
              Choosing Us
            </h2>
          </div>
          <div className='features-grid'>
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
