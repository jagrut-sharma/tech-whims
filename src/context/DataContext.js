import { createContext, useContext, useEffect, useState } from "react";

import { dataReducer, initialData } from "../reducer/reducer";
import { ACTIONS } from "../utils/actions";
import { useImmerReducer } from "use-immer";
import axios from "axios";
import { useAuth } from "./AuthContext";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
  loader: null,
  setLoader: () => {},
  isError: null,
  setIsError: () => {},
});

// export const initialData = {
//   categories: [],
//   productsList: [],
//   wishlist: [],
//   cartList: [],
//   addressList: [],
// };

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useImmerReducer(dataReducer, initialData);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const { user } = useAuth();

  const dataFetch = async () => {
    try {
      setIsError(false);
      setLoader(true);
      const {
        data: { categories },
      } = await axios.get("/api/categories");
      dataDispatch({
        type: ACTIONS.INITIALIZE_CATEGORIES,
        payload: categories,
      });

      const {
        data: { products },
      } = await axios.get("/api/products");
      dataDispatch({ type: ACTIONS.INITIALIZE_PRODUCTS, payload: products });
      setLoader(false);
    } catch (err) {
      console.log(err);
      setIsError(err);
      setLoader(false);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  useEffect(() => {
    if (user) {
      dataDispatch({ type: ACTIONS.ADD_TO_CART, payload: user.cart });
      dataDispatch({ type: ACTIONS.ADD_TO_WISHLIST, payload: user.wishlist });
    }
  }, [user]);

  const dataContext = {
    dataState,
    dataDispatch,
    loader,
    setLoader,
    isError,
    setIsError,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
