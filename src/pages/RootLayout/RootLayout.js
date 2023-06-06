import React from "react";
import { Outlet } from "react-router-dom";

import Nav from "../../components/Nav/Nav";
import classes from "./RootLayout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout() {
  return (
    <div className={classes.container}>
      <Nav />
      <Outlet />
      <ToastContainer className={classes["toast-container"]} />
    </div>
  );
}
