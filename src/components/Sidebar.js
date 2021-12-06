import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByLocation,
  getProductsCategory,
  getProductsLocation,
} from "../state/products";
import { Link} from "react-router-dom";import Grid from "./Grid";
;


const Sidebar = () => {

  //onclick que cuando el usuario haga click se haga un dispatch con el item
  //y en grid se absorba el valor

  //Use selector
  const usecategories= useSelector((state)=> state.products.categories)
  const uselocation= useSelector((state)=> state.products.location)
console.log(uselocation);
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());
  }, []);

  
  return (
    <div className=" flex justify-content: flex-start">
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
      <Grid/>
    </div>
  );
};

export default Sidebar;
