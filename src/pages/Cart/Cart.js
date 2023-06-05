import React from "react";

import classes from "./Cart.module.css";
import { useDataContext } from "../../context/DataContext";
import CartProductCard from "./CartProductCard";
import OrderDetails from "../../components/OrderDetails/OrderDetails";

export default function Cart() {
  const {
    dataState: { cartList },
  } = useDataContext();

  return (
    <>
      <main className={classes["cart-container"]}>
        <h2>Cart ({cartList.length})</h2>

        {cartList.length === 0 ? (
          <p className={classes["empty-alert"]}>
            No items present in cart. Please Shop!
          </p>
        ) : (
          <div className={classes["content-container"]}>
            <div className={classes["all-card-container"]}>
              {cartList.map((product) => (
                <CartProductCard key={product._id} {...product} />
              ))}
            </div>
            <div>
              <OrderDetails cartList={cartList} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
