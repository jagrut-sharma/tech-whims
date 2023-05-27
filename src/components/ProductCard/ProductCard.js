import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";

export default function ProductCard(product) {
  const {
    _id,
    name,
    image,
    inStock,
    originalPrice,
    price,
    stars,
    reviewCount,
    company,
  } = product;

  const formattedPrice = price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <div
      className={`${classes["product-card"]} ${
        inStock ? "" : classes["out-of-stock"]
      }`}
    >
      <Link to={`/products/${_id}`}>
        <img src={image} alt={name} />
        <p className={classes["product-name"]}>{name}</p>
        <span>{company[0].toUpperCase() + company.slice(1)}</span>
        <div className={classes["price-container"]}>
          <p>
            {formattedPrice} <span>{originalPrice}</span>
          </p>
          <p className={classes["discount-label"]}>
            {`(${Math.floor(
              ((originalPrice - price) / originalPrice) * 100
            )}% off)`}
          </p>
        </div>
        <div className={classes["rating-review-container"]}>
          <div className={classes["rating-container"]}>
            <span>{stars}</span>
            <AiFillStar color="#fff" />
          </div>
          <span>{`(${
            reviewCount > 1000
              ? (reviewCount / 1000).toFixed(1) + "k"
              : reviewCount
          })`}</span>
        </div>
      </Link>
      <button className={classes["cart-btn"]}>Add to Cart</button>
      <button className={classes["wishlist-icon"]}>
        <AiFillHeart size={"1rem"} className={classes["icon"]} />
      </button>
    </div>
  );
}
