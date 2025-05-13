import React, { useState, useEffect } from 'react'
import '../../assets/styles/Testimonials.css'

const Testimonials = ({ testimonials }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const cardsPerPage = isMobile ? 1 : 3

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNextPage = () => {
    const maxPage = Math.ceil(testimonials.length / cardsPerPage) - 1
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev))
  }

  // Lấy testimonials cho trang hiện tại
  const getCurrentTestimonials = () => {
    const startIndex = currentPage * cardsPerPage
    return testimonials.slice(startIndex, startIndex + cardsPerPage)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const maxPage = Math.ceil(testimonials.length / cardsPerPage) - 1
      if (currentPage < maxPage) {
        setCurrentPage((prev) => prev + 1)
      } else {
        setCurrentPage(0)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentPage, testimonials.length, cardsPerPage])

  return (
    <section className='testimonials-section'>
      <div className='container'>
        <h2 className='section-title'>Our Client Reviews</h2>
        <div className='category-filter'>
          <button className='filter-btn active'>Testimonials</button>
        </div>
        <div className='testimonials-container'>
          <button
            className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-black text-xl hover:bg-gray-100'
            onClick={handlePrevPage}
          >
            &larr;
          </button>
          <div className='testimonials-grid'>
            {getCurrentTestimonials().map((testimonial) => (
              <div className='testimonial-card' key={testimonial.id}>
                <div className='testimonial-image'>
                  <img src={testimonial.interiorImage} alt='Interior' />
                </div>
                <div className='testimonial-content'>
                  <div className='testimonial-avatar'>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3 className='testimonial-name'>{testimonial.name}</h3>
                  <p className='testimonial-title'>{testimonial.title}</p>
                  <p className='testimonial-text'>{testimonial.comment}</p>
                  <div className='testimonial-rating'>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? 'star-filled' : 'star-empty'}>
                        {i < testimonial.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-black text-xl hover:bg-gray-100'
            onClick={handleNextPage}
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
