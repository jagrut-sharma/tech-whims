import React from "react";
import classes from "./ErrorElements.module.css";

export default function ErrorElement({ statusCode, message }) {
  return (
    <main className={classes["error-container"]}>
      <h1>Error Occured</h1>
      <p>
        {statusCode}: {message}
      </p>
    </main>
  );
}
