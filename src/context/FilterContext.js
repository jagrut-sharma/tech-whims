import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { filterReducer, initialFilterVal } from "../reducer/filterReducer";

const FilterContext = createContext({
  appliedFilterValue: {},
  filterDispatch: () => {},
});

export const FilterProvider = function ({ children }) {
  const [filterState, filterDispatch] = useImmerReducer(
    filterReducer,
    initialFilterVal
  );

  const filterContext = {
    appliedFilterValue: filterState,
    filterDispatch,
  };

  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);
