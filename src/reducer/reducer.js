import { ACTIONS } from "../utils/actions";

export const initialData = {
  categories: [],
  productsList: [],
  wishlist: [],
  cartList: [],
  addressList: [
    {
      name: "Adarsh Balika",
      address: "4, PrivetDrive",
      city: "Little Whinging",
      state: "Surrey",
      pincode: "02285",
      phoneNumber: "9876543210",
    },
  ],
};

export const dataReducer = function (draft, action) {
  if (action.type === ACTIONS.INITIALIZE_CATEGORIES) {
    draft.categories = action.payload;
  }

  if (action.type === ACTIONS.INITIALIZE_PRODUCTS) {
    draft.productsList = action.payload;
  }

  if (action.type === ACTIONS.ADD_TO_WISHLIST) {
    draft.wishlist = action.payload;
  }

  if (action.type === ACTIONS.REMOVE_FROM_WISHLIST) {
    draft.wishlist = action.payload;
  }

  if (action.type === ACTIONS.ADD_TO_CART) {
    draft.cartList = action.payload;
  }

  if (action.type === ACTIONS.REMOVE_FROM_CART) {
    draft.cartList = action.payload;
  }
};
