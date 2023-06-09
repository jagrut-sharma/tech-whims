import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useLocation } from "react-router-dom";

import classes from "./ProductCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import { isPresentInCart, isPresentInWishlist } from "../../utils/productUtils";
import { useDataContext } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";
import { addToCart } from "../../services/cartServices";
import { getFormattedValue } from "../../utils/getFormattedPrice";

export default function ProductCard(product) {
  const [isDisabled, setIsDisabled] = useState(false);
  const {
    dataState: { wishlist, cartList },
    dataDispatch,
  } = useDataContext();

  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

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

  const inWishlist = isPresentInWishlist(wishlist, _id);
  const inCart = isPresentInCart(cartList, _id);

  const handleAddToCart = (inStock) => {
    if (token) {
      if (!inStock) return;
      if (inCart) {
        navigate("/cart");
      } else {
        addToCart(dataDispatch, product, token, setIsDisabled);
      }
    } else {
      navigate("/auth", { state: { path: location.pathname } });
    }
  };

  const handleAddToWishlist = () => {
    if (token) {
      if (inWishlist) {
        removeFromWishlist(dataDispatch, token, _id, setIsDisabled);
      } else {
        addToWishlist(dataDispatch, token, product, setIsDisabled);
      }
    } else {
      navigate("/auth", { state: { path: location.pathname } });
    }
  };

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
            {getFormattedValue(price)}{" "}
            <span>{getFormattedValue(originalPrice)}</span>
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

      <button
        className={`${classes["cart-btn"]} ${
          isDisabled && classes["disabled-cart-btn"]
        } ${inCart && classes["added-cart-btn"]}`}
        onClick={() => handleAddToCart(inStock)}
        disabled={isDisabled}
      >
        {inCart ? "Go to Cart" : "Add to Cart"}
      </button>

      <button
        className={`${classes["wishlist-icon"]} ${
          isDisabled && classes["disabled-wishlist-icon"]
        } ${inWishlist && classes["added-wishlist-icon"]}`}
        onClick={handleAddToWishlist}
        disabled={isDisabled}
      >
        <AiFillHeart size={"1rem"} className={classes["icon"]} />
      </button>
    </div>
  );
}
