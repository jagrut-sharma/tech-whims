import React from "react";
import classes from "./Category.module.css";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function Category(category) {
  const { categoryName, image } = category;
  const { filterDispatch } = useFilter();

  const clickHandler = (categoryName) => {
    filterDispatch({ type: ACTIONS.FILTER_CLEAR_FILTER });
    filterDispatch({
      type: ACTIONS.FILTER_CATEGORY,
      payload: { categoryName: categoryName, isChecked: true },
    });
  };

  return (
    <>
      <div className={classes["category-card"]}>
        <Link to={"/products"} onClick={() => clickHandler(categoryName)}>
          <img
            src={image}
            alt={`${categoryName}'s category img`}
            className={classes["card-img"]}
          />
          <p>{categoryName}</p>
        </Link>
      </div>
    </>
  );
}
