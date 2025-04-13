import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Notes from './pages/Notes/Notes'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUs/ContactUs'
import Downloads from './pages/Downloads/Downloads'
import Login from './pages/Login/Login'
import Cart from './pages/cart/cart'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/downloads' element={<Downloads/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
