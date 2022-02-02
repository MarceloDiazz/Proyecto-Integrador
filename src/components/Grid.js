import React  from "react";
import CardProducts from "../commons/card/CardProducts";
import { useSelector } from "react-redux";

const Grid = () => {
  //traer todos los prod, por cat y por loc

  const locations = useSelector((state) => state.products.searchByLocation);
  const categories = useSelector((state) => state.products.searchByCategory);

  return (
    <div className="mt-2 grid grid-cols-1 gap-y-5 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
      {categories[0]
        ? categories.map((data, i) => <CardProducts card={data} key={i} />)
        : locations.map((data, i) => <CardProducts card={data} key={i}/>)}
    </div>
  );
};

export default Grid;
