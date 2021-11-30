import React from 'react'
import { Link } from "react-router-dom";
import {postUserRegister} from "../../state/registration"
import { useDispatch } from "react-redux";
import useInput from "../../hook/useInput"

const Register = () => {
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(postUserRegister({name: name.value,email: email.value, password: password.value}))
    //poner un then con una notificacion
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-red-400">

    
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">
      
          <h2 className="text-3xl font-bold mb-10 text-gray-800 flex justify-center">CREATE ACOUNT</h2>
      
          <form className="space-y-5" onSubmit={handleSubmit}>
      
            <div>
              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input {...name} type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div>
              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input {...email} type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div>
              <label {...password} className="block mb-1 font-bold text-gray-500">Password</label>
              <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            </div>
      
            <div className="flex items-center">
              <input type="url" id="agree"/>
              <Link to="/log">Already have an account? Sign in</Link>
            </div>
      
            <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>
      
          </form>
      
        </div>
      
      </div>
    )
}

export default Register
