import {React, useState, useEffect} from 'react'
import InfoNavbar from "../commons/navbar/InfoNavbar"
import axios from "axios"
//reemplazar el user por un pedido axios get a login
/* const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
} */
//reemplazar por: Cerrar cesion, Login y sign up

const Navbar = () => {
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get('http://localhost:3001/api/auth/login')
    .then(({payload}) =>{
      setUser(payload)
    })
  })
console.log(user);
    return (
      <>
     <InfoNavbar/>
    </>
    )
}

export default Navbar
