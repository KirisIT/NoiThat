import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../assets/styles/Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  // Theo dõi scroll để thay đổi kiểu dáng header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Kiểm tra đường dẫn hiện tại để highlight menu item
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className='container'>
        <nav className='navbar'>
          <div className='logo'>
            <Link to='/'>Panto</Link>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
            <div className='nav-item dropdown'>
              <Link to='/furniture' className={`nav-link ${isActive('/furniture')}`}>
                Furniture
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='arrow-icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </Link>
            </div>
            <div className='nav-item'>
              <Link to='/shop' className={`nav-link ${isActive('/shop')}`}>
                Shop
              </Link>
            </div>
            <div className='nav-item'>
              <Link to='/about' className={`nav-link ${isActive('/about')}`}>
                About Us
              </Link>
            </div>
            <div className='nav-item'>
              <Link to='/contact' className={`nav-link ${isActive('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>

          <div className='cart-container'>
            <Link to='/cart' className='cart-link'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='cart-icon'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                />
              </svg>
              <span className='cart-badge'>0</span>
            </Link>
          </div>

          <div className='mobile-menu-toggle' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`toggle-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`toggle-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
            <span className={`toggle-bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
