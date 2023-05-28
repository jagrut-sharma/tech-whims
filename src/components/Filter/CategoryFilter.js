import React from "react";

import classes from "./Filter.module.css";
import { useDataContext } from "../../context/DataContext";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function CategoryFilter() {
  const {
    dataState: { categories },
  } = useDataContext();

  const {
    appliedFilterValue: { category: categoryFilter },
    filterDispatch,
  } = useFilter();

  const handleChange = (e) => {
    filterDispatch({
      type: ACTIONS.FILTER_CATEGORY,
      payload: { categoryName: e.target.name, isChecked: e.target.checked },
    });
  };

  return (
    <>
      <div className={classes["sub-filter-container"]}>
        <p className={classes["filter-name"]}>Category</p>
        {categories.map((category) => {
          return (
            <div
              key={category.id}
              className={classes["category-filter-container"]}
            >
              <input
                type="checkbox"
                name={category.categoryName}
                id={category.categoryName}
                onChange={handleChange}
                checked={categoryFilter.includes(category.categoryName)}
              />
              <label htmlFor={category.categoryName}>
                {category.categoryName}
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
}
