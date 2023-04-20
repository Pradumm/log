import React from 'react'
import { Router, Route, Routes, BrowserRouter } from "react-router-dom"
import Home from './Commponet/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profle from './pages/Profle'
import ProtectRoiut from "./Commponet/Router/ProtectRoiut"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>

          <Route path='/' element ={<ProtectRoiut/>}>
            <Route path='/Profle' element={<Profle />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App