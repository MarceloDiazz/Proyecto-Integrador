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
import { Link} from "react-router-dom";
import Grid from "./Grid";
const Sidebar = () => {

  const {type, name} = useParams();

 //useselectors
  const filterCategories = useSelector((state) => state.products.categories);
  const filterLocation = useSelector((state) => state.products.location);
  const locations = useSelector((state) => state.products.searchByLocation);
  const categories = useSelector((state) => state.products.searchByCategory);
  const products = useSelector((state) => state.products.allProducts);

  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {

 //Traerme el listado para filtar   
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());

//traerme todos los productos
    dispatch(getProducts());

//Listar por location o categoria
  if ( type === "location"){

    dispatch(getProductsByLocation(name))
  }
    else if (type === "category"){

      dispatch(getProductsByCategory(name));
    }
  }, [type,name]);

 

  return (
    <div className="min-h-screem flex">
      
    <div className="bg-white-800 text-blue w-64 border">
      <span className="flex justify-center font-bold text-2xl p-2  ">
        FILTRO
      </span>
      <div>
        <h6 className="flex justify-center border bg-green-400">Ubicacion</h6>
        <div>
          {filterLocation.map((item) => (
            <ul>
            <Link to={`/location/${item}`}><li className="flex justify-center border p-4">{item}</li> </Link>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <h6 className="flex justify-center border bg-green-400">Categoria</h6>
        <div>
          {filterCategories.map((item) => (  
            <ul>
             <Link to={`/category/${item}`}> <li className="flex justify-center border p-4">{item}</li></Link>
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
