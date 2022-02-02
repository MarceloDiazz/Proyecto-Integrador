import { React, useEffect } from "react";
import {useLocation} from "react-router"
import { useDispatch, useSelector } from "react-redux";
import CardProducts from "../commons/card/CardProducts"
import {
  getProducts,
  getProductsCategory,
  getProductsLocation,
} from "../state/products";
import { Link } from "react-router-dom";
import Grid from "./Grid";
const Sidebar = () => {
  //useselectors
  const user = useSelector((state) => state.registration.user);
  const filterCategories = useSelector((state) => state.products.categories);
  const filterLocation = useSelector((state) => state.products.location);
  const products = useSelector((state) => state.products.allProducts);
  const location= useLocation()


  //dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    //Traerme el listado para filtar
    dispatch(getProductsCategory());
    dispatch(getProductsLocation());
  }, [dispatch]);

  return (
    <div className={` relative min-h-scree md:flex `}>
      <div
        className={`sidebar  w-full md:w-64 md:relative bg-white-800 text-blue left-0 transform  ease-in-out border`}
      >
        <span className="flex justify-center font-bold text-3xl p-2  bg-green-600 mb-10">
          {user?.admin === true ? "VISTA ADMIN" : "FILTRO"}
        </span>
        <div>
          <h6 className="flex justify-center border bg-black text-white text-2xl">
            {user?.admin === true ? "¿Qué desea hacer?" : "Ubicación"}
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
              filterLocation.map((item, index) => {
                return (
                  <ul className="p-4" key={index}>
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
              {filterCategories.map((item, index) => (
                <ul className="p-4" key={index}>
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
        {location.pathname === "/" ? (
          <div className="mt-2 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
            {products?.map((data, i) => <CardProducts card={data} key={i} />)}
          </div>
        ) : <Grid /> }
        
      </div>
    </div>
  );
};

export default Sidebar;
