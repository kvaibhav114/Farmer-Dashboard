import React from 'react'
import HomePage from "./Pages/HomePage"
import Login from './Pages/Login'
import { Routes, Route } from 'react-router-dom'
import DashboardMain from './Pages/DashboardMain'
import "./App.css"
function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element = {<HomePage />} />
      <Route path = "/login" element = {<Login />} />
      <Route path = "/dashboard" element = {<DashboardMain />} />
      </Routes>
      
    </div>
  )
}

export default App
