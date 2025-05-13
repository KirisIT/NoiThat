import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/styles/SearchBar.css'

const SearchBar = ({ placeholder = 'Search furniture', darkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      // Chuyển hướng đến trang tìm kiếm với query parameter
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm('')
    }
  }

  return (
    <form className={`search-box ${darkMode ? 'dark' : ''} ${isFocused ? 'focused' : ''}`} onSubmit={handleSearch}>
      <input
        type='text'
        placeholder={placeholder}
        className='search-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button type='submit' className='search-button' aria-label='Search'>
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
    </form>
  )
}

export default SearchBar
