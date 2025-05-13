import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import '../../assets/styles/ProductSlider.css'

const ProductSlider = ({ products, title, categories = ['Chair', 'Beds', 'Sofa', 'Lamp'] }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 4

  // Lọc sản phẩm khi category thay đổi
  useEffect(() => {
    const filtered = products.filter((product) => activeCategory === 'All' || product.category === activeCategory)
    setFilteredProducts(filtered)
    setCurrentPage(0) // Reset về trang đầu khi đổi category
  }, [activeCategory, products])

  // Xử lý chuyển trang
  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const handleNextPage = () => {
    const maxPage = Math.ceil(filteredProducts.length / productsPerPage) - 1
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : prev))
  }

  // Lấy sản phẩm cho trang hiện tại
  const getCurrentProducts = () => {
    const startIndex = currentPage * productsPerPage
    return filteredProducts.slice(startIndex, startIndex + productsPerPage)
  }

  return (
    <section className='products-section'>
      <div className='container'>
        <h2 className='section-title'>{title}</h2>
        <div className='category-filter'>
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='products-container'>
          <button
            className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-black text-xl hover:bg-gray-100'
            onClick={handlePrevPage}
          >
            &larr;
          </button>
          <div className='products-grid'>
            {getCurrentProducts().map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <button
            className='w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-black text-xl hover:bg-gray-100'
            onClick={handleNextPage}
          >
            &rarr;
          </button>
        </div>
        <div className='view-all'>
          <a href='/shop'>View All</a>
        </div>
      </div>
    </section>
  )
}

export default ProductSlider
