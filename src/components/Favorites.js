import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavoriteProduct, getFavoriteProduct } from "../state/products";

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.registration.user);
  const favorites = useSelector((state) => state.products?.favorite);

  useEffect(() => {
    dispatch(getFavoriteProduct(user?.id));
  }, [dispatch, user?.id]);

  return (
    <div className="sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
      <div className="px-32 py-20 bg-gray-100 gap-10 flex flex-wrap ">
        {favorites?.map((fav, index) => (
          <div className="max-w-xs rounded-md  shadow-lg  transition duration-500  bg-white" key={index}>
            <div className="flex justify-end" key={index}>
              <button 
              
              onClick={((e)=>{
                e.preventDefault()
                dispatch(deleteFavoriteProduct(fav?.name))
                .then(()=> dispatch(getFavoriteProduct(user?.id)))
              })}>
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
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              </button>
            </div>
            <div>
              <img src={fav.image} className="w-80 h-40" alt={fav.name} />
            </div>
            <div className="py-4 px-4 bg-white">
              <h3 className="text-lg font-semibold text-gray-600 text-center">
                {fav.name}
              </h3>
              <p className="mt-4 text-lg font-thin text-center">
                {fav.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
