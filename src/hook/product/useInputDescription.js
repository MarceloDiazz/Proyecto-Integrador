import { useState } from "react";
import {useSelector } from "react-redux";

const useInputDescription = () => {
const singleProduct = useSelector((state) => state.products.singleProduct);


  const [description, setDescription] = useState(singleProduct?.description);

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  return { description, onChangeDescription };
};

export default useInputDescription;