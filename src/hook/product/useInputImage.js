import { useState } from "react";
import {useSelector } from "react-redux";

const useInputImage = () => {
const singleProduct = useSelector((state) => state.products.singleProduct);


  const [image, setImage] = useState(singleProduct?.image);

  const onChangeImage = (e) => {
    setImage(e.target.value);
  };
  return { image, onChangeImage };
};

export default useInputImage;

