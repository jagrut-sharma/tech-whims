import React from "react";

import Footer from "../components/Footer/Footer";
import classes from "./Home.module.css";
import { useDataContext } from "../context/DataContext";
import ErrorElement from "../components/ErrorEle/ErrorElement";

export default function Home() {
  const { loader, isError } = useDataContext();
  let element;

  if (isError) {
    element = <ErrorElement statusCode={"404"} message={isError.message} />;
  } else {
    element = loader ? (
      <h1>Loading....</h1>
    ) : (
      <div className={classes["body-container"]}>
        <div className={classes.body}>
          <h1>Body</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return <>{element}</>;
}
