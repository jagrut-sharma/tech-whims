import React from "react";
import { Outlet } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";

import Nav from "../../components/Nav/Nav";
import classes from "./RootLayout.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDataContext } from "../../context/DataContext";

export default function RootLayout() {
  const { loader } = useDataContext();

  return (
    <div className={classes.container}>
      <Nav />
      <Outlet />
      <ToastContainer className={classes["toast-container"]} />

      <Backdrop
        // sx={{ color: "#42944c", zIndex: 100000 }}
        open={loader}
        className={classes.loader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
