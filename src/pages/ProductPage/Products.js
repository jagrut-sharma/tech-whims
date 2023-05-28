import React from "react";

import classes from "./Products.module.css";
import Filter from "../../components/Filter/Filter";
import { useDataContext } from "../../context/DataContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import ErrorElement from "../../components/ErrorEle/ErrorElement";

export default function Products() {
  const {
    dataState: { productsList },
    loader,
    isError,
  } = useDataContext();

  const totalProducts = productsList.reduce(
    (acc, { inStock }) => (inStock ? acc + 1 : acc),
    0
  );

  const productEle = isError ? (
    <ErrorElement statusCode={"404"} message={isError.message} />
  ) : (
    <div className={classes["product-container"]}>
      <Filter />

      <main>
        <p className={classes["product-number"]}>
          {loader ? "Loading...." : `Showing ${totalProducts} Products`}
        </p>
        <div className={classes["product-card-container"]}>
          {productsList.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        </div>
      </main>
    </div>
  );

  return <>{productEle}</>;
}
