import { useState } from "react";
import {useSelector } from "react-redux";

const useInputLocation = () => {
const singleProduct = useSelector((state) => state.products.singleProduct);


  const [location, setLocation] = useState(singleProduct?.location);

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  return { location, onChangeLocation };
};

export default useInputLocation;
