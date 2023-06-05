import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from "./CartProductCard.module.css";
import { Link } from "react-router-dom";
import { isPresentInWishlist } from "../../utils/productUtils";
import { useDataContext } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../services/cartServices";

export default function CartProductCard(product) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { token } = useAuth();
  const {
    dataState: { wishlist },
    dataDispatch,
  } = useDataContext();

  const {
    _id,
    name,
    image,
    originalPrice,
    price,
    stars,
    reviewCount,
    company,
    qty,
  } = product;

  const inWishlist = isPresentInWishlist(wishlist, _id);

  const formattedPrice = price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const formattedOriginalPrice = originalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const handleAddToWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(dataDispatch, token, _id, setIsDisabled);
    } else {
      addToWishlist(dataDispatch, token, product, setIsDisabled);
    }
  };

  const handleRemovalCart = () => {
    removeFromCart(dataDispatch, _id, token, setIsDisabled);
  };

  const handleQuantityCart = (productID, process) => {
    updateCartQuantity(dataDispatch, productID, token, process, setIsDisabled);
  };

  return (
    <div className={classes["card-container"]}>
      <Link to={`/products/${_id}`} className={classes["link"]}>
        <img src={image} alt={name} />
      </Link>

      <div className={classes["description-container"]}>
        <p>{name}</p>
        <span>{company[0].toUpperCase() + company.slice(1)}</span>

        <div className={classes["price-container"]}>
          <div>
            <p>{formattedPrice}</p>
            <span>{formattedOriginalPrice}</span>
          </div>

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

        <div className={classes["quantity-container"]}>
          <button
            disabled={qty === 1 || isDisabled}
            onClick={() => handleQuantityCart(_id, "DECREMENT")}
          >
            <AiFillMinusCircle size={"1.3rem"} />
          </button>

          <span>{qty}</span>

          <button
            disabled={isDisabled}
            onClick={() => handleQuantityCart(_id, "INCREMENT")}
          >
            <AiFillPlusCircle size={"1.3rem"} />
          </button>
        </div>

        <div>
          <button
            className={classes["remove-btn"]}
            onClick={handleRemovalCart}
            disabled={isDisabled}
          >
            Remove
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
      </div>
    </div>
  );
}
