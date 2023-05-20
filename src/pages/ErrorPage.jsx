import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "You visited a wrong link";

  if (error.status === 500) {
    title = "Server Problem";
    message = "Kuch hua hai";
  }

  return (
    <>
      <h1>{title}</h1>
      <p>{message}</p>
    </>
  );
}
