import React from 'react'
import Login from './pages/Login'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
   <>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
   </>

  )
}

export default App