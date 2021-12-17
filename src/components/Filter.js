import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory, getProductsByLocation } from '../state/products'
import Grid from './Grid'
import Sidebar from './Sidebar'

const Filter = () => {

    const dispatch= useDispatch()
    const {type, name}= useParams()
    
    useEffect(()=>{

        

        if ( type === "location"){

            dispatch(getProductsByLocation(name))
          }
        
              dispatch(getProductsByCategory(name));
    },[type, name])


   
    return (
        <div>
            <Sidebar/> 
        </div>
    )
}

export default Filter
