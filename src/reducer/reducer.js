import { ACTIONS } from "../utils/actions";

export const dataReducer = function (draft, action) {
  if (action.type === ACTIONS.INITIALIZE_CATEGORIES) {
    draft.categories = action.payload;
  }

  if (action.type === ACTIONS.INITIALIZE_PRODUCTS) {
    draft.productsList = action.payload;
  }

  return draft;
};
