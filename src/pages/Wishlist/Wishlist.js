import React from "react";

import classes from "./Wishlist.module.css";
import { useDataContext } from "../../context/DataContext";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function Wishlist() {
  const {
    dataState: { wishlist },
  } = useDataContext();

  return (
    <>
      <main className={classes["wishlist-container"]}>
        <h2>Wishlist ({wishlist.length})</h2>

        {wishlist.length === 0 && (
          <p className={classes["empty-alert"]}>
            Please add items to see your wishlist
          </p>
        )}

        <div className={classes["wishlist-product-container"]}>
          {wishlist.map((product) => (
            <ProductCard {...product} key={product._id} />
          ))}
        </div>
      </main>
    </>
  );
}
