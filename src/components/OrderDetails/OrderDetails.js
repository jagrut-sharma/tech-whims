import React from "react";

import classes from "./OrderDetails.module.css";
import { useNavigate } from "react-router-dom";

export default function OrderDetails({ cartList }) {
  const navigate = useNavigate();
  const totalPrice = cartList.reduce((total, { price }) => total + price, 0);

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <div className={classes["order-details-container"]}>
      <h3>Order Details</h3>
      <ul>
        {cartList.map(({ name, _id, qty, price }) => (
          <li key={_id} className={classes["order-price"]}>
            <span>
              {name} ({qty}):
            </span>
            <span>{price}</span>
          </li>
        ))}
      </ul>

      <p>
        Total Price: <span>{formattedTotalPrice}</span>
      </p>

      <button
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
    </div>
  );
}
