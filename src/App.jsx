import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Basket from './pages/Basket'
import Category from './pages/Category'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
        <Route path='/category/:category' element={<Category />}></Route>
        <Route path='/product/:id' element={<Product />}></Route>
        {/* Below routes are for when you will gonna random end point */}
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/product' element={<NotFound />}></Route>
      </Routes>
    </Router>
  )
}

export default App
