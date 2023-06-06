import axios from "axios";
import { ACTIONS } from "../utils/actions";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/contants";

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

    toast.success("ADDED TO WISHLIST", toastConfig);
    dispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: wishlist });
  } catch (error) {
    console.log(`Error in adding to wishlist: ${error}`);
    toast.error("Error in adding to wishlist", toastConfig);
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

    toast.info("REMOVED FROM WISHLIST", toastConfig);
    dispatch({ type: ACTIONS.REMOVE_FROM_WISHLIST, payload: wishlist });
  } catch (error) {
    console.log(`Error in removing from wishlist: ${error}`);
    toast.error("Error in removing from wishlist", toastConfig);
  }
};
