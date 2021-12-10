import React from 'react'

import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Login from "./commons/logger/Login"
import Register from "./commons/logger/Register"
import { Route, Routes} from "react-router";
/* import {useSelector} from "react-redux"
import { setUser } from './state/registration' */
import SingleProducts from './components/SingleProduct'
import Filter from './components/Filter'





const App = () => {


    return (

      <div className="h-screen">
    <Navbar/>
    <Routes> 
    <Route  path="/" element={<Sidebar/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/register" element={<Register/>}/>
    <Route  path="/:type/:name" element={<Filter/>}/>
    <Route  path="/product/:id" element={<SingleProducts/>}/>

  
    </Routes>
      </div>
    )
}

export default App
