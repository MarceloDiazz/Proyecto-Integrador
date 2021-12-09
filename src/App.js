import React from 'react'

import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Login from "./commons/logger/Login"
import Register from "./commons/logger/Register"
import { Route, Routes} from "react-router";
/* import {useSelector} from "react-redux"
import { setUser } from './state/registration' */
import SingleProducts from './components/SingleProduct'





const App = () => {
/* 
BUGS:
-aislar login y register de sidebar
-se mezclan las rutas cuando pongo single product

*/


    return (

      <div className="h-screen">
    <Navbar/>

    
    <Routes> 
    <Route  path="/" element={<Sidebar/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/register" element={<Register/>}/>
    <Route  path="/:type/:name" element={<Sidebar/>}/>
    <Route  path="/product/:id" element={<SingleProducts/>}/>

  
    </Routes>
      </div>
    )
}

export default App
