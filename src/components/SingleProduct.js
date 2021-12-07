import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../state/products';
import Modal from "../commons/Modal"

const SingleProducts = () => {
  const {id}= useParams()



  const dispatch= useDispatch()
  useEffect(()=>{
    dispatch(getSingleProduct(id))
  },[])


  return (
    <div>
      <Modal/>
    </div>
  )
}


export default SingleProducts
