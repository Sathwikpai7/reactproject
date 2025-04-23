import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Services from './pages/Services'
import Sathwik from "./pages/Sathwik"
import Home from "./pages/home"
import Login from "./pages/login"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Navbar from "./components/Navbar"


function App() {
  

    
  
  

  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes> 
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/orders' element={<Orders/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/sathwik' element={<Sathwik/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
