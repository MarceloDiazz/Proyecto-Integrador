import React from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../../state/products";
import { Toaster, toast } from "react-hot-toast";

const CardProducts = ({ card, i }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.registration.user);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(card.id))
      .then((data) => {
        if (data.type === "delProduct/fulfilled") {
          toast.success("Elemento borrado exitosamente!", {
            duration: 2000,
            position: "top-center",
          });
        }
      })
      .then(() => dispatch(getProducts()));
  };

  return (
    <div key={i} className="group relative">
      <div className="w-full  min-h-50 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-40 lg:aspect-none">
        <img
          src={card.image}
          alt={card}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{card.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{card.location}</p>
        </div>
        <div className=" p-2 grid-cols-1"></div>
      </div>
      {user?.admin === true ? (
        <div>
          <p className="text-sm font-medium text-gray-900 flex mt-2 justify-center">
            <button
              onClick={handleDelete}
              className="text-white bg-red-500 border-0 py-2 px-3 focus:outline-none hover:bg-red-600 rounded text-xs"
            >
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>

            <Link to={`/product/${card.id}`}>
              <button className="ml-2 text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-xs">
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
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </Link>
          </p>
        </div>
      ) : (
        <>
          <p className="text-sm font-medium text-gray-900 flex justify-center mt-4">
            <Link to={`/product/${card.id}`}>
              <button
                onClick={() => {
                  if (!user) {
                    toast.error("Debes registrarte para acceder al producto", {
                      duration: 4000,
                      position: "top-center",
                    });
                    setTimeout(() => {
                      navigate("/login");
                    }, 5);
                  }
                }}
                className="ml-2 text-white bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-xs"
              >
                Ver m??s{" "}
              </button>
            </Link>
          </p>
        </>
      )}
      <Toaster />
    </div>
  );
};

export default CardProducts;
