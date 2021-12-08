import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../state/products';
import Modal from "../commons/Modal"
import axios from 'axios';

const SingleProducts = () => {
  const {id}= useParams()

/*   const [singleProduct, setSingleProduct]= useState([])

  useEffect(()=>{
    axios
    .get(`/api/products/${id}`)
    .then((res)=> setSingleProduct(res.data))
  },[])

console.log("PRODUCT", singleProduct); */

  const singleProduct= useSelector((state)=> state.products.singleProduct)


  const dispatch= useDispatch()
  useEffect(()=>{
   if(!singleProduct) dispatch(getSingleProduct(id))
  },[singleProduct])


  return (
    <div>
      <Modal singleProduct={singleProduct}/>
    </div>
  )
}


export default SingleProducts
