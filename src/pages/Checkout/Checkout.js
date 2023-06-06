import React, { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

import classes from "./Checkout.module.css";
import CheckoutAddCard from "../../components/CheckoutAddCard/CheckoutAddCard";
import AddressForm from "../../components/Addresses/AddressForm";
import { useImmer } from "use-immer";
import { defaultFormValues, toastConfig } from "../../utils/contants";
import { ACTIONS } from "../../utils/actions";
import { clearCart } from "../../services/cartServices";
import { useAuth } from "../../context/AuthContext";
import { getFormattedValue } from "../../utils/getFormattedPrice";
import { toast } from "react-toastify";
import { Popper } from "../../utils/Popper";

export default function Checkout() {
  const [selectedAdd, setSelectedAdd] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formValue, setFormValue] = useImmer(defaultFormValues);
  const [isDisabled, setIsDisabled] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const { user } = useAuth();

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

  useEffect(() => {
    if (orderPlaced) {
      setTimeout(() => {
        setOrderPlaced(false);
        navigate("/");
      }, 5000);
    }
  }, [orderPlaced]);

  const handleFormVisibility = () => {
    setIsFormOpen(true);
    setFormValue(defaultFormValues);
  };

  const totalPrice = cartList.reduce(
    (total, { originalPrice, qty }) => total + originalPrice * qty,
    0
  );

  const totalDiscount = cartList.reduce(
    (total, { originalPrice, price, qty }) =>
      total + (originalPrice - price) * qty,
    0
  );

  const delivery = 100;
  const finalPrice = totalPrice - totalDiscount + delivery;
  const discountRate = ((totalDiscount / totalPrice) * 100).toFixed();

  const handleOrderPlacement = (finalPrice) => {
    if (selectedAdd) {
      displayRazorpay();
    } else {
      // show error to select address
      console.log("Select an address first");
      toast.error("Address not provided", toastConfig);
    }
  };

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    if (selectedAdd) {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      const options = {
        key: "rzp_test_GabLTKSfXzan0S",
        amount: finalPrice * 100,
        currency: "INR",
        name: "Tech Whims",
        description: "Thank you for shopping with us",
        handler: function (response) {
          console.log(response);
          dataDispatch({ type: ACTIONS.CLEAR_CART });
          setSelectedAdd(null);
          clearCart(cartList, dataDispatch, token, setIsDisabled, true);
          Popper();
          setOrderPlaced(true);
          toast.success("Order Placed", toastConfig);
        },
        prefill: {
          name: `${user["name" || "firstName"]}`,
          email: user?.email,
          contact: "9696009211",
        },
        theme: {
          color: "#208854",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    }
  };

  return (
    <>
      {orderPlaced ? (
        <div className={classes["order-confirmation"]}>
          <h1>Your order has been placed!!</h1>
        </div>
      ) : (
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
                Price: <span>{getFormattedValue(totalPrice)}</span>
              </p>
              <p>
                Discount:{" "}
                <span>{`- ${getFormattedValue(
                  totalDiscount
                )} (${discountRate}%)`}</span>
              </p>
              <p>
                Delivery Charge: <span>+ {getFormattedValue(delivery)}</span>
              </p>

              <p className={classes["total"]}>
                Total Price: <span>{getFormattedValue(finalPrice)}</span>
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
      )}
    </>
  );
}
