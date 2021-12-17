import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getProductsCategory,
  getProductsLocation,
} from "../state/products";
import { Link } from "react-router-dom";
import Grid from "./Grid";
const Sidebar = () => {
  //estado local para manipular sidebar
  const [open, setOpen]= useState(false)

  //useselectors
  const user = useSelector((state) => state.registration.user);
  const filterCategories = useSelector((state) => state.products.categories);
  const filterLocation = useSelector((state) => state.products.location);
  
  //dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
    //Traerme el listado para filtar
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());


  }, []);

 
  return (
    <div className={` relative min-h-scree md:flex`}>

      <div className={`sidebar  w-full md:w-64 md:relative bg-white-800 text-blue left-0 transform  ease-in-out`}>
        <span className="flex justify-center font-bold text-3xl p-2  bg-green-400 mb-10">
          {user?.admin === true ? "VISTA ADMIN" : "FILTRO"}
        </span>
        <div>
          <h6 className="flex justify-center border bg-black text-white text-2xl">
            {user?.admin === true ? "¿Qué desea hacer?" : "Ubicacion"}
          </h6>
          <div className="mb-20">
            {user?.admin === true ? (
              <>
                <ul className="p-4">
                  <Link to={`/admin/users`}>
                    <li className="flex justify-center border p-2 hover:bg-green-200 rounded hover:border-green-200">
                      Usuarios registrados
                    </li>{" "}
                  </Link>
                </ul>

                <ul className="p-4">
                  <Link to={`/admin/product`}>
                    <li className="flex justify-center border p-2 hover:bg-green-200 rounded hover:border-green-200">
                      Agregar producto
                    </li>{" "}
                  </Link>
                </ul>
              </>
            ) : (
              filterLocation.map((item) => {
                return (
                  <ul className="p-4">
                    <Link to={`/location/${item}`}>
                      <li className="flex justify-center border p-2 hover:bg-green-200 rounded hover:border-green-200">
                        {item.toUpperCase()}
                      </li>{" "}
                    </Link>
                  </ul>
                );
              })
            )}
          </div>
        </div>
        {user?.admin === true ? (
          ""
        ) : (
          <div>
            <h6 className="flex justify-center border text-2xl  bg-black text-white">
              Categoría
            </h6>
            <div>
              {filterCategories.map((item) => (
                <ul className="p-4">
                  <Link to={`/category/${item}`}>
                    {" "}
                    <li className="flex justify-center border p-2 hover:bg-green-200 rounded hover:border-green-200">
                      {item.toUpperCase()}
                    </li>
                  </Link>
                </ul>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="p-10 pt-10">
        <Grid />
      </div>
    </div>
  );
};

export default Sidebar;
