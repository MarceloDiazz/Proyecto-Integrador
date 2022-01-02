import { useState } from "react";
import {useSelector } from "react-redux";

const useInputCategory = () => {
const singleProduct = useSelector((state) => state.products.singleProduct);


  const [category, setCategory] = useState(singleProduct?.category);

  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  return { category, onChangeCategory };
};

export default useInputCategory;