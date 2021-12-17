import { useState } from "react";
import { toast } from "react-hot-toast";

export function useNameProduct() {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~*]/;
  const [name, setName] = useState("");

  const onChangeName = (e) => {
    if (e.target.value.length > 25) {
      toast.error("Name is invalid. Max characters are 20");
    }
    setName(e.target.value);
  };

  const validateName = () => {
    if (name.length < 4 || name.length > 25) {
      return {
        error: true,
        message:
          "Name is invalid. Min characters are 4 and Max characters are 25",
      };
    }
    if (regex.test(name)) {
      return { error: true, message: "Name is invalid. Can't have symbols " };
    }
    return { error: false };
  };

  return { name, onChangeName, validateName };
}

export default useNameProduct;
