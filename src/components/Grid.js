import React,{useEffect} from "react";
import CardProducts from "../commons/card/CardProducts"
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByLocation,
  getProductsByCategory,
  getProducts,
} from "../state/products";
import {useParams } from "react-router-dom";


const Grid = ( ) => {
    //traer todos los prod, por cat y por loc
    const locations= useSelector((state)=> state.products.searchByLocation)
    const categories= useSelector((state)=> state.products.searchByCategory)
    const products = useSelector((state) => state.products.allProducts);


    //traer el nombre de la ruta
    const {location}= useParams()
    const {category} = useParams()
  

    //traer el valor de los get
    console.log("USERPARAMS GRID", location);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProducts())
      dispatch(getProductsByLocation(location))
      dispatch(getProductsByCategory(category))
  
    }, []);



  return (
 <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {locations[0] ? locations.map((data)=>(
              <CardProducts card={data}/>
          )): categories[0] ? categories.map((data)=>(
                <CardProducts card={data}/>
          )): products.map((data)=>(
              <CardProducts card={data}/>
          ))}
       
   
    </div>
  );
};

export default Grid;
