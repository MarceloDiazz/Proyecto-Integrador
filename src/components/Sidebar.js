import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getProducts,
  getProductsByCategory,
  getProductsByLocation,
  getProductsCategory,
  getProductsLocation,
} from "../state/products";
import { Link} from "react-router-dom";import Grid from "./Grid";
;


const Sidebar = () => {
  const {location}= useParams()
  const {category} = useParams()
  //onclick que cuando el usuario haga click se haga un dispatch con el item
  //y en grid se absorba el valor

  //Use selector
  const usecategories= useSelector((state)=> state.products.categories)
  const uselocation= useSelector((state)=> state.products.location)
  const locations= useSelector((state)=> state.products.searchByLocation)
  const categories= useSelector((state)=> state.products.searchByCategory)
  const products = useSelector((state) => state.products.allProducts);


  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());
    dispatch(getProducts())
    dispatch(getProductsByLocation(location))
    dispatch(getProductsByCategory(category))
  }, []);

  
  return (
    <div className=" flex justify-content:center">
      <div className="w-64 border-r border-gray-200 hidden md:block">

      <div className="text-center ">
    <h6 className="text-center font-bold text-2xl">Filtro</h6>
    <br/>
    <div className="text-center border p-2">
    <h6 className="p-2 bg-green-200">Ubicacion</h6>
      <ul>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
        {uselocation.map((item, index) =>(
          <Link to={`/location/${item}`} ><li className="mb-8 border shadow-sm rounded-lg p-2"><button>{item}</button></li></Link>  
        ))}
      </div>
      </ul>
    </div>
    
    <div className="text-center border p-2">
    <h6 className="p-2 bg-green-200">Categoria</h6>
      <ul>
      <div className="mb-8 border shadow-sm rounded-lg p-2">
      {usecategories.map((item, index) =>(
      <Link to={`category/${item}`}><li className="mb-8 border shadow-sm rounded-lg p-2"><button>{item}</button></li></Link> 
        ))}
      </div>
      </ul>
    </div>
    </div>
      </div>
      <Grid locations={locations} categories={categories} products={products} />
    </div>
  );
};

export default Sidebar;
