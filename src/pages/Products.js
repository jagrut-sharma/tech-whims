import React from "react";

import classes from "./Products.module.css";
import Filter from "../components/Filter/Filter";
import { useDataContext } from "../context/DataContext";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  const {
    dataState: { productsList },
  } = useDataContext();

  console.log(productsList);

  return (
    <div className={classes["product-container"]}>
      <Filter />
      <main>
        <p className={classes["product-number"]}>
          Showing {productsList.length} Products
        </p>
        <div className={classes["product-card-container"]}>
          {productsList.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        </div>
      </main>
    </div>
  );
}
