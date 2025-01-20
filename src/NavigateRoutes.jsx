import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import About from './view/About'
import Product from './view/Product'
import { Contact } from './view/Contact'
import { Header } from './components/Header'

const NavigateRoutes = () => {
  return (
    <Router>

        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default NavigateRoutes
