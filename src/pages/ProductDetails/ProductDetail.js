import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import { productFetch } from "../../services/productDetailService";
import { useDataContext } from "../../context/DataContext";
import ErrorElement from "../../components/ErrorEle/ErrorElement";
import classes from "./ProductDetail.module.css";
import { isPresentInCart, isPresentInWishlist } from "../../utils/productUtils";
import { useAuth } from "../../context/AuthContext";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";
import { addToCart } from "../../services/cartServices";
import { getFormattedValue } from "../../utils/getFormattedPrice";

export default function ProductDetail() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const { isError, setIsError } = useDataContext();
  const {
    dataDispatch,
    dataState: { wishlist, cartList },
  } = useDataContext();
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    productFetch(productID, setProduct, setIsError);
  }, []);

  if (!product) {
    return <h1>Loading.....</h1>;
  }

  const {
    // category,
    company,
    description,
    image,
    name,
    originalPrice,
    price,
    reviewCount,
    stars,
    _id,
    inStock,
  } = product;

  const inWishlist = isPresentInWishlist(wishlist, _id);
  const inCart = isPresentInCart(cartList, _id);

  const handleCart = (inStock) => {
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

  const handleWishlist = () => {
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
    <>
      {isError ? (
        <ErrorElement statusCode={404} message={isError} />
      ) : (
        <main className={classes["product-card-container"]}>
          <div className={classes["product-detail-card"]}>
            <div className={classes["img-container"]}>
              <img src={image} alt={name} />
              <button
                className={`${classes["wishlist-icon"]} ${
                  isDisabled && classes["disabled-wishlist-icon"]
                } ${inWishlist && classes["added-wishlist-icon"]}`}
                onClick={handleWishlist}
                disabled={isDisabled}
              >
                <AiFillHeart size={"1.5rem"} />
              </button>
            </div>
            <div className={classes["details-container"]}>
              <h1>{name}</h1>
              <p>{company[0].toUpperCase() + company.slice(1)}</p>
              <div className={classes["rating-and-reviews"]}>
                <p className={classes["rating"]}>
                  {stars} <BsFillStarFill size={"1rem"} color="#fff" />
                </p>
                <p>{`(${
                  reviewCount > 1000
                    ? (reviewCount / 1000).toFixed(1) + "k"
                    : reviewCount
                } reviews)`}</p>
              </div>
              <p className={classes["price"]}>
                {getFormattedValue(price)}{" "}
                <span>{getFormattedValue(originalPrice)}</span>
              </p>
              <p>
                <span>Description:</span> {description}
              </p>
              <button
                className={`${classes["add-cart-btn"]} ${
                  isDisabled && classes["disabled-cart-btn"]
                } ${inCart && classes["added-cart-btn"]}`}
                onClick={() => handleCart(inStock)}
                disabled={isDisabled}
              >
                {inCart ? "Go to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
