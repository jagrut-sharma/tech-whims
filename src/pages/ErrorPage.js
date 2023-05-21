import React from "react";
import { useRouteError } from "react-router-dom";

import classes from "./ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();

  // console.log(";hiashdiashdish");
  console.log(error);

  let title = "An error occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    const err = JSON.parse(error._bodyText);
    message = err.message;
  }

  if (error.status === 404) {
    const err = JSON.parse(error._bodyText);
    message = err.message;
  }

  return (
    <>
      <div className={classes["error-container"]}>
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </>
  );
}
