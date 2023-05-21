import React from "react";

import classes from "./ErrorPage.module.css";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  let message = "Some error occured";

  if (error.status === 404) {
    message = error.data;
  }

  return (
    <div className={classes["error-container"]}>
      <h1>Error Occured</h1>
      <p>{message}</p>
    </div>
  );
}
