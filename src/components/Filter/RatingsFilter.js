import React from "react";
import classes from "./Filter.module.css";

export default function RatingsFilter() {
  return (
    <>
      <div className={classes["sub-filter-container"]}>
        <p className={classes["filter-name"]}>Ratings</p>
        <div className={classes["rating-container"]}>
          <div>
            <input type="radio" name="rating" id={1} />
            <label htmlFor={1}>1 Star +</label>
          </div>
          <div>
            <input type="radio" name="rating" id={2} />
            <label htmlFor={2}>2 Star +</label>
          </div>
          <div>
            <input type="radio" name="rating" id={3} />
            <label htmlFor={3}>3 Star +</label>
          </div>
          <div>
            <input type="radio" name="rating" id={4} />
            <label htmlFor={4}>4 Star +</label>
          </div>
          <div>
            <input type="radio" name="rating" id={5} />
            <label htmlFor={5}>5 Star +</label>
          </div>
        </div>
      </div>
    </>
  );
}
