import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Something went wrong";

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
}
