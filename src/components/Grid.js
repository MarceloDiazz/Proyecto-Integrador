import React, { useEffect } from "react";
import CardProducts from "../commons/card/CardProducts"
import {useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router";
import { getProductsByCategory, getProductsByLocation } from "../state/products";



const Grid = ({products}) => {
    //traer todos los prod, por cat y por loc
    const locations = useSelector((state) => state.products.searchByLocation);
    const categories = useSelector((state) => state.products.searchByCategory);

  return (
 <div className="mt-2 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {categories[0] ? categories.map((data, i)=>(
              <CardProducts card={data} key={i}/>
          )): locations[0] ? locations.map((data)=>(
                <CardProducts card={data}/>
          )): products.map((data)=>(
              <CardProducts card={data}/>
          ))}
       
   
    </div>
  );
};

export default Grid;
