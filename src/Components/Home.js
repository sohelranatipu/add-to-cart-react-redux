import React from "react";
import { CartState } from "./Context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
