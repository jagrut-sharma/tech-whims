import React, { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

import classes from "./Filter.module.css";
import { Link } from "react-router-dom";
import RatingsFilter from "./RatingsFilter";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import SortFilter from "./SortFilter";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function Filter() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const { filterDispatch } = useFilter();

  const handleClear = () => {
    filterDispatch({ type: ACTIONS.FILTER_CLEAR_FILTER });
    setIsFilterVisible(false);
  };

  return (
    <div>
      <aside className={classes["filter-container"]}>
        <div
          className={classes["responsive-filter-heading"]}
          onClick={() => setIsFilterVisible(!isFilterVisible)}
        >
          <h2>Filters</h2>
          <BsFillArrowDownCircleFill
            color="#400480"
            size={"1.5rem"}
            className={`${
              isFilterVisible
                ? classes["arrow-visible"]
                : classes["arrow-not-visible"]
            }`}
          />
        </div>

        <div className={classes["filter-heading"]}>
          <h3>Filters</h3>
          <Link className={classes["clear-filter"]} onClick={handleClear}>
            Clear
          </Link>
        </div>

        <div
          className={
            isFilterVisible
              ? classes["responsive-container-visible"]
              : classes["responsive-container-not-visible"]
          }
        >
          <PriceFilter />

          <CategoryFilter />

          <RatingsFilter />

          <SortFilter />

          <div className={classes["responsive-btn-container"]}>
            <button
              className={classes["responsive-filter-btn"]}
              onClick={() => setIsFilterVisible(false)}
            >
              Apply
            </button>

            <button
              className={classes["responsive-filter-btn"]}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
