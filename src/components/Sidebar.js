import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  getProducts,
  getProductsByCategory,
  getProductsByLocation,
  getProductsCategory,
  getProductsLocation,
} from "../state/products";
import { Link } from "react-router-dom";
import Grid from "./Grid";
const Sidebar = () => {
  const { location } = useParams();
  const { category } = useParams();
  //onclick que cuando el usuario haga click se haga un dispatch con el item
  //y en grid se absorba el valor

  //Use selector
  const usecategories = useSelector((state) => state.products.categories);
  const uselocation = useSelector((state) => state.products.location);
  const locations = useSelector((state) => state.products.searchByLocation);
  const categories = useSelector((state) => state.products.searchByCategory);
  const products = useSelector((state) => state.products.allProducts);
 console.log(products);
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());
    dispatch(getProducts());
    dispatch(getProductsByLocation(location));
    dispatch(getProductsByCategory(category));
  }, []);

  return (
    <div className="min-h-screem flex">
      
    <div className="bg-white-800 text-blue w-64 border">
      <span className="flex justify-center font-bold text-2xl p-2  ">
        FILTRO
      </span>
      <div>
        <h6 className="flex justify-center border bg-green-400">Ubicacion</h6>
        <div>
          {uselocation.map((item) => (
            <ul>
            <Link to={`location/${item}`}><li className="flex justify-center border p-4">{item}</li> </Link>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h6 className="flex justify-center border bg-green-400">Categoria</h6>
        <div>
          {usecategories.map((item) => (  
            <ul>
             <Link to={`category/${item}`}> <li className="flex justify-center border p-4">{item}</li></Link>
            </ul>
          ))}
        </div>
      </div>
    </div>  
    <div className="p-10 pt-20">
      <Grid products={products} locations={locations} categories={categories} />      
    </div>
    </div>  

  );
};

export default Sidebar;
