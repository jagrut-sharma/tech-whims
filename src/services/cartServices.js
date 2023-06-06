import axios from "axios";
import { ACTIONS } from "../utils/actions";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/contants";

export const addToCart = async (dispatch, product, token, setIsDisabled) => {
  try {
    setIsDisabled(true);
    const res = await axios.post(
      "/api/user/cart",
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setIsDisabled(false);

    const {
      data: { cart },
    } = res;

    toast.success("ADDED TO CART", toastConfig);
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: cart });
  } catch (error) {
    console.log(`Error in adding to cart: ${error}`);
    toast.error("Error in adding to cart", toastConfig);
  }
};

export const removeFromCart = async (
  dispatch,
  productID,
  token,
  setIsDisabled,
  clearing = false
) => {
  try {
    setIsDisabled(true);
    const res = await axios.delete(`/api/user/cart/${productID}`, {
      headers: {
        authorization: token,
      },
    });
    setIsDisabled(false);

    const {
      data: { cart },
    } = res;

    if (!clearing) {
      toast.info("REMOVED FROM CART", toastConfig);
    }
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: cart });
  } catch (error) {
    console.log(`Error in removing from cart: ${error}`);
    toast.error("Error in removing from cart", toastConfig);
  }
};

export const updateCartQuantity = async (
  dispatch,
  productID,
  token,
  process,
  setIsDisabled
) => {
  try {
    setIsDisabled(true);
    const res = await axios.post(
      `/api/user/cart/${productID}`,
      {
        action: {
          type: process === "INCREMENT" ? "increment" : "decrement",
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    setIsDisabled(false);

    const {
      data: { cart },
    } = res;

    if (process === "INCREMENT") {
      toast.info("QUANTITY INCREMENTED", toastConfig);
    } else {
      toast.info("QUANTITY DECREMENTED", toastConfig);
    }

    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: cart });
  } catch (error) {
    console.log(`Error in updating quantity in cart: ${error}`);
    toast.error("Error in updating quantity in cart", toastConfig);
  }
};

export const clearCart = (
  cartList,
  dispatch,
  token,
  setIsDisabled,
  clearing
) => {
  console.log(cartList);

  cartList.forEach((item) =>
    removeFromCart(dispatch, item._id, token, setIsDisabled, clearing)
  );
};
