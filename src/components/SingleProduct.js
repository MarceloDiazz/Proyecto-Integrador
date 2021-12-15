import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon } from '@heroicons/react/outline'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../state/products';
import axios from 'axios';

const SingleProducts = () => {
  const {id}= useParams()
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const dispatch= useDispatch()
  useEffect(()=>{
  dispatch(getSingleProduct(id))
  },[])


  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-3/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={singleProduct?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {singleProduct?.location}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {singleProduct?.name}
            </h1>

            <p className="leading-relaxed">
              {singleProduct?.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div>
              <button className="flex justify-center text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                Favorito
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="ml-2 w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default SingleProducts
