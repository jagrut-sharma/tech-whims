import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productFetch } from "../../services/productDetailService";
import { useDataContext } from "../../context/DataContext";
import ErrorElement from "../../components/ErrorEle/ErrorElement";

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
    descripton,
    image,
    name,
    originalPrice,
    price,
    reviewCount,
    stars,
    // _id,
  } = product;

  return (
    <>
      {isError ? (
        <ErrorElement statusCode={404} message={isError} />
      ) : (
        <>
          <h1>{name}</h1>
          <p>{company}</p>
          <img src={image} alt={name} />
          <p>{descripton}</p>
          <p>
            {price} <span>{originalPrice}</span>
          </p>
          <p>
            {stars} <span>{`(${reviewCount})`}</span>
          </p>
        </>
      )}
    </>
  );
}
