import {React} from 'react'
import {postUserLoged} from "../../state/registration"
import { useDispatch } from "react-redux";
import useInput from "../../hook/useInput"
import { Link, useNavigate } from 'react-router-dom';
import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();
  

   const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postUserLoged({email: email.value, password: password.value}))
    .then((data) => {
      if(data.type === 'userLoged/fulfilled'){
        navigate('/')
      } else if(data.type === 'userLoged/rejected'){
        message.error(`Fallo en el logueo, intente nuevamente`)
      }
    })
  }
  
 
    //poner un then con una notificacion
  
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-600 to-red-500 to-red-500">

    
        <div className="w-full h-full md:w-1/3 shadow-2xl bg-white p-16 rounded  ">
      
          <h2 className="text-3xl font-bold mb-10 text-gray-800 flex justify-center">LOGIN</h2>
      
          <form className="space-y-5" onSubmit={handleSubmit}>
      
            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input {...email}type="email" className=" w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div>
              <label  className="block mb-1 font-bold text-gray-500">Password</label>
              <input {...password} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <Link to="/register"><p className="border text-blue-400 hover:text-blue-700 font-bold text-center mt-5">You don't have a registered account? Sign up</p></Link>
      
            <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
      
          </form>
      
        </div>
      
      </div>
    )
    }
    /* 
    <!-- component -->
<div class="h-screen flex">
  <div class="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
    <div>
      <h1 class="text-white font-bold text-4xl font-sans">GoFinance</h1>
      <p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
      <button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
    </div>
  </div>
  <div class="flex w-1/2 justify-center items-center bg-white">
    <form class="bg-white">
      <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
      <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input {...email} class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
      <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
        </svg>
        <input  class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
      <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
      <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
    </form>
  </div>
</div>
    */

export default Login
