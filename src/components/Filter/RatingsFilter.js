import React from "react";
import { BsStarFill } from "react-icons/bs";

import classes from "./Filter.module.css";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function RatingsFilter() {
  const {
    filterDispatch,
    appliedFilterValue: { ratingsFilter },
  } = useFilter();

  const handleChange = (e) => {
    filterDispatch({ type: ACTIONS.FILTER_RATINGS, payload: e.target.value });
  };

  return (
    <>
      <div className={classes["sub-filter-container"]}>
        <p className={classes["filter-name"]}>Ratings</p>
        <div className={classes["rating-container"]}>
          <div>
            <input
              type="radio"
              name="rating"
              id={1}
              value={1}
              onChange={handleChange}
              checked={1 === +ratingsFilter}
            />
            <label htmlFor={1}>
              1 <BsStarFill size={"0.9rem"} color="#400480" /> <span>+</span>{" "}
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id={2}
              value={2}
              onChange={handleChange}
              checked={2 === +ratingsFilter}
            />
            <label htmlFor={2}>
              2 <BsStarFill size={"0.9rem"} color="#400480" /> <span>+</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id={3}
              value={3}
              onChange={handleChange}
              checked={3 === +ratingsFilter}
            />
            <label htmlFor={3}>
              3 <BsStarFill size={"0.9rem"} color="#400480" /> <span>+</span>
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="rating"
              id={4}
              value={4}
              onChange={handleChange}
              checked={4 === +ratingsFilter}
            />
            <label htmlFor={4}>
              4 <BsStarFill size={"0.9rem"} color="#400480" /> <span>+</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
