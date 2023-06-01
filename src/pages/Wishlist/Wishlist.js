import React from "react";

import classes from "./Wishlist.module.css";
import { useDataContext } from "../../context/DataContext";

export default function Wishlist() {
  const {
    dataState: { wishlist },
  } = useDataContext();

  return (
    <>
      <main>
        <h1>Wishlist</h1>
        {wishlist.length === 0 && (
          <p className={classes["empty-alert"]}>
            Please add items to see your wishlist
          </p>
        )}
      </main>
    </>
  );
}
