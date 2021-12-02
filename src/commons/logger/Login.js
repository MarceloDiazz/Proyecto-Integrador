import {React, useState} from 'react'
import {postUserLoged, setUser} from "../../state/registration"
import { useDispatch } from "react-redux";
import useInput from "../../hook/useInput"
import { useNavigate } from 'react-router-dom';
import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();
  const [user, setUser]= useState({})

   const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postUserLoged({email: email.value, password: password.value}))
   /*  .then(({payload})=> payload)
    .then((userLoged)=> setUser(userLoged)) */
  }
  
 /*  if(user === undefined) {
    message.error('intente nuevamente')
  }else {
    message
          .success(
            `Logueo exitoso, bienvenido: ${user.name}. Espere a ser redirigido...`
          )
  }
 */
    //poner un then con una notificacion
  
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-600 to-red-500 to-red-500">

    
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
      
          <h2 className="text-3xl font-bold mb-10 text-gray-800 flex justify-center">LOGIN</h2>
      
          <form className="space-y-5" onSubmit={handleSubmit}>
      
            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input {...email}type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div>
              <label  className="block mb-1 font-bold text-gray-500">Password</label>
              <input {...password} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div className="flex items-center">
              <input type="checkbox" id="agree"/>
              <label htmlFor="agree" className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
            </div>
      
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>
      
          </form>
      
        </div>
      
      </div>
    )
    }

export default Login
