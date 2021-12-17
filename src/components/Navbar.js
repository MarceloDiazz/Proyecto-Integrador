import { useDispatch, useSelector } from "react-redux";
import { React, useEffect } from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import iconTrasla from "../assets/iconTrasla.png";
import { sendLogoutRequest, setUser } from "../state/registration";
import { Link, useNavigate } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast"


const userNavigation = [
  { name: "Login", href: "/login" },
  { name: "Sign Up", href: "/register" },
];
const userLogued = [{ name: "Logout"}];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}




const Navbar = () => {
  const navigate= useNavigate()
  
  const user = useSelector((state) => state.registration.user);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sendLogoutRequest())
    .then(()=> {
      if (user?.admin === true){
        toast.success('Chau admin!', {
          duration: 4000,
          position: 'top-center',
          })
          setTimeout(() => {
            navigate('/')
            
          }, 100);
      }
      
      toast.success('Gracias por visitarnos!', {
        duration: 4000,
        position: 'top-center',
        })
        setTimeout(() => {
          navigate('/')
          
        }, 100);
        
    }
    )
    }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }                      
  }, []);


  return (
    <>
      <div className="sticky top-0 z-50">
        <Disclosure as="nav" className="bg-green-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                      <img
                        className="h-12 w-12"
                        src={iconTrasla}
                        alt="Workflow"
                      />
                   </Link>
                    </div>
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-white">
                    {user?.admin === true
                      ? "HOLA ADMIN"
                      : "DESTINO TRASLASIERRA"}
                  </span>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <img
                              className="h-11 w-11 rounded-full"
                              src="https://banner2.cleanpng.com/20200318/tei/transparent-man-icon-bald-icon-avatars-icon-5e725abb012853.5441655315845526350047.jpg"
                              alt="user"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {!user
                              ? userNavigation.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <Link to={item.href} >
                                      <button
                                        className={classNames(
                                          active ? "bg-yellow-300" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </button>
                                      </Link>
                                    )}
                                  </Menu.Item>
                                ))
                              : userLogued.map((item) => (
                                  <Menu.Item key={item.name}>
                                    {({ active }) => (
                                      <button
                                        onClick={handleClick}
                                        className={classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700"
                                        )}
                                      >
                                        {item.name}
                                      </button>
                                    )}
                                  </Menu.Item>
                                ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://banner2.cleanpng.com/20200318/tei/transparent-man-icon-bald-icon-avatars-icon-5e725abb012853.5441655315845526350047.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {!user ? "Registrate!" : user.name}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {!user
                      ? userNavigation.map((item) => (
                        <Link to={item.href}>
                          <Disclosure.Button
                            key={item.name}
                           
                            as="a"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                          >
                            {item.name}
                          </Disclosure.Button>
                        </Link>  
                        ))
                      : userLogued.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                          >
                            <button
                              onClick={handleClick}
                            >
                              {item.name}
                            </button>
                          </Disclosure.Button>
                        ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <Toaster />
    </>
  );
};

export default Navbar;
