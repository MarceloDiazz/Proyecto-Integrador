import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { getProductsByCategory, getProductsByLocation } from '../state/products'
import Grid from './Grid'

const Filter = () => {
    const dispatch= useDispatch()
    const {type, name}= useParams()

    const locations = useSelector((state) => state.products.searchByLocation);
    useEffect(()=>{
        type === "location" ? dispatch(getProductsByLocation(name))
        : dispatch(getProductsByCategory(name))
    },[type, name])

    console.log(locations);
    return (
        <div>
            <Grid locations={locations} /> 
        </div>
    )
}

export default Filter
