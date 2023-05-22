import React from "react";
import classes from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={classes["product-container"]}>
      <aside className={classes["filter-container"]}>
        <div className={classes["filter-heading"]}>
          <h4>Filters</h4>
          <button className={classes["clear-filter"]}>Clear</button>
        </div>
      </aside>
    </div>
  );
}
