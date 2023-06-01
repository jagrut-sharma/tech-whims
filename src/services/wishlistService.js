import axios from "axios";
import { ACTIONS } from "../utils/actions";

export const addToWishlist = async (
  dispatch,
  token,
  product,
  setIsDisabled
) => {
  try {
    setIsDisabled(true);
    const res = await axios.post(
      "/api/user/wishlist",
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
      data: { wishlist },
    } = res;

    dispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: wishlist });
  } catch (error) {
    console.log(`Error in adding to wishlist: ${error}`);
  }
};

export const removeFromWishlist = async (
  dispatch,
  token,
  productID,
  setIsDisabled
) => {
  try {
    setIsDisabled(true);
    const res = await axios.delete(`/api/user/wishlist/${productID}`, {
      headers: {
        authorization: token,
      },
    });
    setIsDisabled(false);
    const {
      data: { wishlist },
    } = res;

    dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: wishlist });
  } catch (error) {
    console.log(`Error in removing from wishlist: ${error}`);
  }
};
