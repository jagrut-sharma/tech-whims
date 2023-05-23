import React from "react";

import classes from "./Filter.module.css";

export default function SortFilter() {
  return (
    <>
      <div className={classes["sub-filter-container"]}>
        <p className={classes["filter-name"]}>Sort</p>
        <div className={classes["sort-filter"]}>
          <input type="radio" name="sort" id={"increasing"} />
          <label htmlFor={"increasing"}>Low to High</label>
        </div>
        <div className={classes["sort-filter"]}>
          <input type="radio" name="sort" id={"decreasing"} />
          <label htmlFor={"decreasing"}>High to Low</label>
        </div>
      </div>
    </>
  );
}
