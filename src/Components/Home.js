import React from "react";
import { CartState } from "./Context/Context";
import Filters from "./Filters";
import SingleProducts from "./SingleProducts";
import "./style.css";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastDelivery, byRating, sort, SearchQuery },
  } = CartState();

  const transformProducts = () => {
    let storedProducts = products;

    if (sort) {
      storedProducts = storedProducts.sort((a, b) =>
        sort === "LowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      storedProducts = storedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      storedProducts = storedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      storedProducts = storedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (SearchQuery) {
      storedProducts = storedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(SearchQuery)
      );
    }

    return storedProducts;
  };

  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => {
          return <SingleProducts prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
