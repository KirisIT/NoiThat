import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* Các routes khác sẽ được thêm sau */}
          <Route
            path='/furniture'
            element={
              <div className='container py-5'>
                <h1>Trang Furniture</h1>
              </div>
            }
          />
          <Route
            path='/shop'
            element={
              <div className='container py-5'>
                <h1>Trang Shop</h1>
              </div>
            }
          />
          <Route
            path='/about'
            element={
              <div className='container py-5'>
                <h1>Trang About Us</h1>
              </div>
            }
          />
          <Route
            path='/contact'
            element={
              <div className='container py-5'>
                <h1>Trang Contact</h1>
              </div>
            }
          />
          <Route
            path='*'
            element={
              <div className='container py-5'>
                <h1>Không tìm thấy trang</h1>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
