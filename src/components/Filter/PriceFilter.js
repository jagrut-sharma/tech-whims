import React from "react";

import classes from "./Filter.module.css";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function PriceFilter() {
  const {
    appliedFilterValue: { price },
    filterDispatch,
  } = useFilter();

  const handleSliderChange = (e) => {
    filterDispatch({ type: ACTIONS.FILTER_PRICE, payload: e.target.value });
  };

  return (
    <>
      <div className={classes["slider-container"]}>
        <p className={classes["filter-name"]}>Price</p>
        <div className={classes["filter-indicator"]}>
          <p>30k</p>
          <p>60k</p>
          <p>90k</p>
          <p>1.2L</p>
        </div>
        <input
          type="range"
          name="price"
          className={classes["price-slider"]}
          min={30}
          max={120}
          step={10}
          value={price}
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
}
