import React from 'react'

import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Login from "./commons/logger/Login"
import Register from "./commons/logger/Register"
import { Route, Routes} from "react-router";
/* import {useSelector} from "react-redux"
import { setUser } from './state/registration' */
import SingleProducts from './components/SingleProduct'
import Grid from './components/Grid'



const App = () => {
  /* const user= useSelector((state)=> state.registration.user)

  console.log("SET USER", setUser(user));
 const setLocalStorage= ()=>{
    try{
      setUser(user)
      window.localStorage("user", user)
    }catch(error){
      console.error(error);
    }
  } */ 
  //aislar sidebar ***
  //componente grid
  //mapear y renderizar en card
    return (

      <div className="h-screen">
    <Navbar/>
    <Sidebar/>
    <Routes> 
    <Route  path="/" element={<Grid/>}/>
    <Route  path="/product/:id" element={<SingleProducts/>}/>
    <Route  path="/category/:category" element={<Grid/>}/>
    <Route  path="/location/:location" element={<Grid/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
      </div>
    )
}

export default App
