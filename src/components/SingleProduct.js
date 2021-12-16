import React, { useEffect } from "react";
import useInput from "../hook/useInput"
import {useNavigate} from "react-router"
import { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import { useParams } from "react-router-dom";
import { getSingleProduct, updateProduct } from "../state/products";
import axios, { Axios } from "axios";

const SingleProducts = () => {
  const navigate= useNavigate()
  const [edit, setEdit] = useState(true);
  const { id } = useParams();
  const user = useSelector((state) => state.registration.user);
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, []);

  const image= useInput("")
  const location= useInput("")
  const name= useInput("")
  const description= useInput("")



  const handleClick= ((e)=>{
      e.preventDefault()
      axios
      .put(`http://localhost:3001/api/admin/products/update/${id}`, {location: location.value, name: name.value, image: image.value, description: description.value})
      .then((res)=> res.data)
      .catch((error)=> console.log({error}))
  })

 if(!user){
   navigate('/login')
 }
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
            {user?.admin === true ? (
              <>
                <input
                    {...image}
                  className="w-full text-sm title-font text-gray-500 tracking-widest"
                  value={!edit ? null : singleProduct?.image}
                />
                <input
                    {...location}
                  className="text-sm title-font text-gray-500 tracking-widest"
                  value={!edit ? null : singleProduct?.location}
                />
                <input
                    {...name}
                  className="text-gray-900 text-3xl title-font font-medium mb-1"
                  value={!edit ? null : singleProduct?.name}
                />
                <textarea
                    {...description}
                  className="leading-relaxed h-40 w-full"
                  value={!edit ? null : singleProduct?.description}
                />
              </>
            ) : (
              <>
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {singleProduct?.location}
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {singleProduct?.name}
                </h1>

                <p className="leading-relaxed">{singleProduct?.description}</p>
              </>
            )}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-center text-center">
              {user?.admin === true ? (
                <>
                  {edit ? (
                    <button
                      className="mr-2 flex text-white bg-blue-500 border-0 py-2 px-1 focus:outline-none hover:bg-blue-700 rounded"
                      onClick={() => setEdit(!edit)}
                    >
                      Editar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                  ) : (
                    <>
                   
                    <button
                      className="mr-2 flex text-white bg-red-500 border-0 py-2 px-1 focus:outline-none hover:bg-red-700 rounded"
                      onClick={() => setEdit(!edit)}
                    >
                      Descartar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                        />
                      </svg>
                    </button>
                    </>
                  )}

                  <button
                    className="flex text-white bg-green-500 border-0 py-2 px-1 focus:outline-none hover:bg-green-700 rounded"
                    onClick={handleClick}
                  >
                    Guardar
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                      />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                
                <button className="flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                  Favoritos
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProducts;
