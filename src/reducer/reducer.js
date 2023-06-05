import { ACTIONS } from "../utils/actions";

export const initialData = {
  categories: [],
  productsList: [],
  wishlist: [],
  cartList: [],
  addressList: [
    {
      name: "Adarsh Balika",
      address: "4, Privet Drive",
      city: "Little Whinging",
      state: "Surrey",
      pincode: "02285",
      phoneNumber: "9876543210",
      id: "2364c34d-7645-49cb-8b74-4bc5cb09711d",
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

  if (action.type === ACTIONS.ADD_ADDRESS) {
    draft.addressList.push(action.payload);
  }

  if (action.type === ACTIONS.DELETE_ADDRESS) {
    draft.addressList = action.payload;
  }

  if (action.type === ACTIONS.EDIT_ADDRESS) {
    draft.addressList = action.payload;
  }

  if (action.type === ACTIONS.UPDATE_QUANTITY) {
    draft.cartList = action.payload;
  }

  if (action.type === ACTIONS.CLEAR_CART) {
    draft.cartList = [];
  }

  if (action.type === ACTIONS.CLEAR_WISHLIST) {
    draft.wishlist = [];
  }
};
