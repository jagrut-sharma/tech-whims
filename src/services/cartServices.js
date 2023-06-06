import axios from "axios";
import { ACTIONS } from "../utils/actions";

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

    dispatch({ type: ACTIONS.ADD_TO_CART, payload: cart });
  } catch (error) {
    console.log(`Error in adding to cart: ${error}`);
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

    console.log(clearing);
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: cart });
  } catch (error) {
    console.log(`Error in removing from cart: ${error}`);
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

    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: cart });
  } catch (error) {
    console.log(`Error in updating quantity in cart: ${error}`);
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
