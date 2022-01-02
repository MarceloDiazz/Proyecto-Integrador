import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Login from "./commons/logger/Login";
import Register from "./commons/logger/Register";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SingleProducts from "./components/SingleProduct";
import Filter from "./components/Filter";
import GridUsers from "./components/admin/GridUsers";
import Product from "./components/admin/Product";


const App = () => {
  const user = useSelector((state) => state.registration.user);

  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:type/:name" element={<Filter />} />
        <Route path="/product/:id" element={<SingleProducts />} />
        <Route
          path="/admin/users"
          element={user?.admin === false ? <Navigate to="/" /> : <GridUsers />}
        />
        <Route
          path="/admin/product"
          element={user?.admin === false ? <Navigate to="/" /> : <Product />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
