import { ACTIONS } from "../utils/actions";

export const initialFilterVal = {
  search: "",
  price: 120,
  category: [],
  ratingsFilter: "",
  sort: "",
};

export const filterReducer = function (draft, action) {
  if (action.type === ACTIONS.FILTER_PRICE) {
    draft.price = action.payload;
  }

  if (action.type === ACTIONS.FILTER_CATEGORY) {
    if (action.payload.isChecked) {
      draft.category.push(action.payload.categoryName);
    } else {
      draft.category = draft.category.filter(
        (category) => category !== action.payload.categoryName
      );
    }
  }

  if (action.type === ACTIONS.FILTER_RATINGS) {
    draft.ratingsFilter = action.payload;
  }

  if (action.type === ACTIONS.FILTER_SORT) {
    draft.sort = action.payload;
  }

  if (action.type === ACTIONS.FILTER_SEARCH) {
    draft.search = action.payload;
  }

  if (action.type === ACTIONS.FILTER_CLEAR_FILTER) {
    return initialFilterVal;
  }
};
