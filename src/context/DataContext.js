import { createContext, useContext, useEffect, useState } from "react";
import { dataReducer } from "../reducer/reducer";
import { ACTIONS } from "../utils/actions";
import { useImmerReducer } from "use-immer";
import axios from "axios";

const DataContext = createContext({
  categories: [],
  productsList: [],
});

const initialData = {
  categories: [],
  productsList: [],
};

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useImmerReducer(dataReducer, initialData);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const dataFetch = async () => {
    try {
      setIsError(false);
      setLoader(true);
      const {
        data: { categories },
      } = await axios.get("/api/categories");
      dataDispatch({ type: ACTIONS.ADD_CATEGORIES, payload: categories });

      const {
        data: { products },
      } = await axios.get("/api/products");
      dataDispatch({ type: ACTIONS.ADD_PRODUCTS, payload: products });
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
