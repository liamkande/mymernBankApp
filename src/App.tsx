import React from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Deposit from './pages/Deposit'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/deposit" element={<Deposit />} />
      </Routes>
    </Router>
  )
}

export default App
