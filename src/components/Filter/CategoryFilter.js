import React from "react";

import classes from "./Filter.module.css";
import { useDataContext } from "../../context/DataContext";

export default function CategoryFilter() {
  const {
    dataState: { categories },
  } = useDataContext();
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
