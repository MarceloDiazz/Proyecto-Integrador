import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import {postUserRegister} from "../../state/registration"
import { useDispatch } from "react-redux";
import { message } from "antd";
import {useName, useEmail, usePassword} from "../../hook/validate/logger"
import { Toaster, toast } from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const { name, onChangeName, validateName } = useName();
  const { email, onChangeEmail, validateEmail } = useEmail();
  const { password, onChangePassword, validatePassword } = usePassword();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault()
    const passwordValidate = validatePassword();
    const emailValidate = validateEmail();
    const nameValidate = validateName();

    if (passwordValidate.error) return toast.error(passwordValidate.message);
    if (emailValidate.error) return toast.error(emailValidate.message);
    if (nameValidate.error) return toast.error(nameValidate.message);

    dispatch(postUserRegister({name: name,email: email, password: password}))
    .then((data) => {
      if(data.type === 'userRegister/fulfilled'){
        toast.success('Cuenta creada!, redirigiendo...', {
          duration: 4000,
          position: 'top-center',
          })
       setTimeout(() => {
         navigate('/login')
         
       }, 4000);
      } else if(data.type === 'userRegister/rejected'){
        message.error(`Fallo en el registro, intente nuevamente`)
      }
    })
    //poner un then con una notificacion
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 via-green-600 to-red-500 to-red-500">

    
        <div className="w-full h-full sm:w-1/3 shadow-2xl  bg-white p-16 rounded shadow-2xl w-1/3">
      
          <h2 className="text-3xl font-bold mb-10 text-gray-800 flex justify-center">CREATE ACOUNT</h2>
      
          <form className="space-y-5" onSubmit={handleSubmit}>
      
            <div className="justify-center">

              <label className="block mb-1 font-bold text-gray-500">Name</label>
              <input onChange={onChangeName} type="text" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>

              <label className="block mb-1 font-bold text-gray-500">Email</label>
              <input onChange={onChangeEmail} type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
            
              <label  className="block mb-1 font-bold text-gray-500">Password</label>
              <input onChange={onChangePassword} type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"/>
    
              <Link to="/login"><p className="border text-blue-400 hover:text-blue-700 font-bold text-center">Already have an account? Sign in</p></Link>
            </div>
      
            <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign up</button>
      
          </form>
      
        </div>
      <Toaster />
      </div>
    )
}

export default Register
