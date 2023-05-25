import React from "react";

import classes from "./Products.module.css";
import Filter from "../components/Filter/Filter";

export default function Products() {
  return (
    <div className={classes["product-container"]}>
      <Filter />
      <h1>Test</h1>
    </div>
  );
}
