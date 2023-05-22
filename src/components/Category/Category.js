import React from "react";
import classes from "./Category.module.css";

export default function Category(category) {
  const { categoryName, image } = category;

  return (
    <>
      <div className={classes["category-card"]}>
        <img
          src={image}
          alt={`${categoryName}'s category img`}
          className={classes["card-img"]}
        />
        <p>{categoryName}</p>
      </div>
    </>
  );
}
