import React from "react";

import classes from "./Filter.module.css";

export default function PriceFilter() {
  const handleSliderChange = (e) => {
    // console.log(e.target.value);
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
          onChange={handleSliderChange}
        />
      </div>
    </>
  );
}
