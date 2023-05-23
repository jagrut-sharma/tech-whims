import React from "react";

import classes from "./Filter.module.css";
import { Link } from "react-router-dom";
import RatingsFilter from "./RatingsFilter";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";

export default function Filter() {
  return (
    <div className={classes["product-container"]}>
      <aside className={classes["filter-container"]}>
        <div className={classes["filter-heading"]}>
          <h3>Filters</h3>
          <Link className={classes["clear-filter"]}>Clear</Link>
        </div>

        <PriceFilter />

        <CategoryFilter />

        <RatingsFilter />

        <SortFilter />
      </aside>
    </div>
  );
}
