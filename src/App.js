import React from 'react'
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import Login from "./commons/logger/Login"
import Register from "./commons/logger/Register"
import { Route, Routes } from "react-router";


const App = () => {
    return (

      <div className="h-screen">
    <Navbar/>
    <Routes> 
    <Route exact path="/" element={ <Sidebar />}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    </Routes>
      </div>
    )
}

export default App
