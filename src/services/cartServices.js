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
  setIsDisabled
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

    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: cart });
  } catch (error) {
    console.log(`Error in adding to cart: ${error}`);
  }
};
