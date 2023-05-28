import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsFillStarFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

import { productFetch } from "../../services/productDetailService";
import { useDataContext } from "../../context/DataContext";
import ErrorElement from "../../components/ErrorEle/ErrorElement";
import classes from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const { isError, setIsError } = useDataContext();

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
    // _id,
  } = product;

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

  return (
    <>
      {isError ? (
        <ErrorElement statusCode={404} message={isError} />
      ) : (
        <main className={classes["product-card-container"]}>
          <div className={classes["product-detail-card"]}>
            <div className={classes["img-container"]}>
              <img src={image} alt={name} />
              <button className={classes["wishlist-icon"]}>
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
                {formattedPrice} <span>{formattedOriginalPrice}</span>
              </p>
              <p>
                <span>Description:</span> {description}
              </p>
              <button className={classes["add-cart-btn"]}>Add to Cart</button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
