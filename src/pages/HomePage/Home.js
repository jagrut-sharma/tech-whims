import React from "react";

import Footer from "../../components/Footer/Footer";
import classes from "./Home.module.css";
import { useDataContext } from "../../context/DataContext";
import ErrorElement from "../../components/ErrorEle/ErrorElement";
import { Link } from "react-router-dom";
import Category from "../../components/Category/Category";

export default function Home() {
  const {
    loader,
    isError,
    dataState: { categories },
  } = useDataContext();
  let element;

  if (isError) {
    element = <ErrorElement statusCode={"404"} message={isError.message} />;
  } else {
    element = !loader && (
      <div className={classes["body-container"]}>
        <div className={classes.body}>
          <section className={classes.section}>
            <Link to={"/products"}>
              <img
                src={
                  "https://res.cloudinary.com/drehkcoil/image/upload/v1684786682/TechWhims/hero-final-selected_ahyslt.png"
                }
                alt="Hero_image"
                className={classes["hero-img"]}
              />
            </Link>
          </section>
          <div className={classes["categories-label"]}>
            <h2>Shop by Categories</h2>
          </div>
          <div className={classes["category-card-container"]}>
            {categories.map((category) => (
              <Category key={category._id} {...category} />
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return <>{element}</>;
}
