import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hook/useInput";
import { getProductsCategory, getProductsLocation, postProduct } from "../../state/products";

const Product = () => {

  const name= useInput("")
  const image= useInput("")
  const description= useInput("")
  const category= useInput("")
  const location= useInput("")
  
  const handleSubmit =((e)=>{
      e.preventDefault()
      dispatch(postProduct({name: name.value, description: description.value, location:location.value, image: image.value, category: category.value})
      
      )
  })




  const dispatch = useDispatch();
  const filterCategories = useSelector((state) => state.products.categories);
  const filterLocation = useSelector((state) => state.products.location);
  useEffect(() => {
    //Traerme el listado para filtar
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());



  }, []);

  return (
    <div class="h-screen bg-indigo-100 flex justify-center items-center">
      <div class="lg:w-2/5 md:w-1/2 w-2/3">
        <form onSubmit={handleSubmit}  class="bg-white p-10 rounded-lg shadow-lg min-w-full">
          <h1 class="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">
            Crear producto
          </h1>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="username"
            >
              Nombre
            </label>
            <input
              {...name}
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md"
              for="email"
            >
              Imagen
            </label>
            <input
              {...image}
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="url"
              id="url"
              placeholder="URL"
            />
          </div>
          <div>
            <label
              class="text-gray-800 font-semibold block my-3 text-md "
              for="password"
            >
              Descripcion
            </label>
            <textarea
              {...description}
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none h-20"
              type="text"
              placeholder="Descripcion del producto"
            />
          </div>

          <label for="company-size" class="text-gray-800 font-semibold block my-3 text-md ">Categorias:</label>
          <div class="mt-1 flex justify-between ">
          <div class="mt-1">
            <select name="company-size" id="company-size" class="rounded" {...category} >
              <option value="">Tipo</option>
              {  filterCategories?.map((category)=>       
                    <option value={category}>{category}</option>
                 )}
            </select>
          </div>
          <div class="mt-1">
          <select name="company-size" id="company-size" class="rounded" {...location} >
              <option value="">Tipo</option>
              { filterLocation?.map((location)=>       
                    <option value={location}>{location}</option>
                 )}
            </select>
          </div>
        </div>

          <button
            type="submit"
            class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
          >
            Postear
          </button>      
        </form>
      </div>
    </div>
  );
};

export default Product;
