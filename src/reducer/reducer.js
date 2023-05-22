import { ACTIONS } from "../utils/actions";

export const dataReducer = function (draft, action) {
  if (action.type === ACTIONS.ADD_CATEGORIES) {
    draft.categories = action.payload;
  }

  if (action.type === ACTIONS.ADD_PRODUCTS) {
    draft.productsList = action.payload;
  }
};
