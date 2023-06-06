import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from "./Checkout.module.css";
import CheckoutAddCard from "../../components/CheckoutAddCard/CheckoutAddCard";
import AddressForm from "../../components/Addresses/AddressForm";
import { useImmer } from "use-immer";
import { defaultFormValues } from "../../utils/contants";
import { ACTIONS } from "../../utils/actions";
import { clearCart } from "../../services/cartServices";
import { useAuth } from "../../context/AuthContext";

export default function Checkout() {
  const [selectedAdd, setSelectedAdd] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValue, setFormValue] = useImmer(defaultFormValues);
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    dataState: { cartList, addressList },
    dataDispatch,
  } = useDataContext();
  const { token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (cartList.length === 0) {
      navigate("/products");
    }
  }, []);

  const handleFormVisibility = () => {
    setIsFormOpen(true);
    setFormValue(defaultFormValues);
  };

  const totalPrice = cartList.reduce(
    (total, { originalPrice }) => total + originalPrice,
    0
  );

  const totalDiscount = cartList.reduce(
    (total, { originalPrice, price }) => total + (originalPrice - price),
    0
  );

  const formattedTotalPrice = totalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const formattedDiscountPrice = totalDiscount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const delivery = 100;
  const deliveryCharge = delivery.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const finalPrice = totalPrice - totalDiscount + delivery;
  const formattedFinalPrice = finalPrice.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  const handleOrderPlacement = (finalPrice) => {
    console.log(finalPrice);
    if (selectedAdd) {
      // Successful
      console.log("Successfull");
      dataDispatch({ type: ACTIONS.CLEAR_CART });
      setSelectedAdd(null);
      clearCart(cartList, dataDispatch, token, setIsDisabled, true);
    } else {
      // show error to select address
      console.log("Select an address first");
    }
  };

  return (
    <main className={classes["checkout-container"]}>
      <div className={classes["address-container"]}>
        <h3>Address Details</h3>

        {addressList.map((addrs) => (
          <CheckoutAddCard
            key={addrs.id}
            address={addrs}
            setSelectedAdd={setSelectedAdd}
            selectedAdd={selectedAdd}
          />
        ))}

        <div className={classes["new-addrs-container"]}>
          {isFormOpen ? (
            <AddressForm
              setFormValues={setFormValue}
              formValues={formValue}
              setFormOpen={setIsFormOpen}
            />
          ) : (
            <h2
              onClick={handleFormVisibility}
              className={classes["add-address"]}
            >
              <AiFillPlusCircle color={"#208854"} /> Add new address
            </h2>
          )}
        </div>
      </div>

      <div>
        <h3>Price Details</h3>
        <div className={classes["price-details-container"]}>
          <p>
            Price: <span>{formattedTotalPrice}</span>
          </p>
          <p>
            Discount: <span>{formattedDiscountPrice}</span>
          </p>
          <p>
            Delivery Charge: <span>{deliveryCharge}</span>
          </p>

          <p className={classes["total"]}>
            Total Price: <span>{formattedFinalPrice}</span>
          </p>

          <button
            className={classes["place-order"]}
            onClick={() => handleOrderPlacement(finalPrice)}
            disabled={isDisabled}
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}
