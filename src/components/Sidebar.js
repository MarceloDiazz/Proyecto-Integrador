import {React, useEffect, useState} from 'react'
import Filter from "../commons/filtro/Filter"
import CardProducts from '../commons/CardProducts';
import axios from "axios";

const Sidebar = () => {
const [products, setProduct] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/api/products')
        .then(response =>
            response.data
            )
        .then(prod => setProduct(prod) )
    },[])

    return (
   
        <div className="flex h-screen ">
        <div className="w-64 p-6 border-r border-gray-200 hidden md:block">
        <Filter/>
        </div>
        <CardProducts props={products}/>
        </div>
       


    )
}

export default Sidebar
