import React from "react";

import classes from "./Filter.module.css";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function SortFilter() {
  const {
    filterDispatch,
    appliedFilterValue: { sort },
  } = useFilter();

  const handleChange = (e) => {
    filterDispatch({ type: ACTIONS.FILTER_SORT, payload: e.target.value });
  };

  return (
    <>
      <div className={classes["sub-filter-container"]}>
        <p className={classes["filter-name"]}>Sort</p>
        <div className={classes["sort-filter"]}>
          <input
            type="radio"
            name="sort"
            id={"increasing"}
            value={"increasing"}
            onChange={handleChange}
            checked={sort === "increasing"}
          />
          <label htmlFor={"increasing"}>Low to High</label>
        </div>
        <div className={classes["sort-filter"]}>
          <input
            type="radio"
            name="sort"
            id={"decreasing"}
            value={"decreasing"}
            onChange={handleChange}
            checked={sort === "decreasing"}
          />
          <label htmlFor={"decreasing"}>High to Low</label>
        </div>
      </div>
    </>
  );
}
