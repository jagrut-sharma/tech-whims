import React from "react";

import Footer from "../components/Footer/Footer";
import classes from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div className={classes.body}>
        <h1>Body</h1>
      </div>
      <Footer />
    </>
  );
}
