import React from 'react'
import NavigationBar from './components/NavigationBar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import Balance from './pages/Balance'
import UserData from './pages/UserData'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/userdata" element={<UserData />} />
      </Routes>
    </Router>
  )
}

export default App
