import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { TbJewishStarFilled } from "react-icons/tb";

import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <h1 className={classes.title}>Tech Whims</h1>
        <h1 className={`${classes.title} ${classes["short-form"]}`}>TW</h1>

        <form action="#" className={classes["search-bar"]}>
          <button className={classes["search-btn"]}>
            <FiSearch size="1.5rem" />
          </button>

          <input
            type="search"
            name="search-bar"
            id="search-bar-input"
            placeholder="Search Products"
          />
        </form>
        <a href="https://www.google.com" className={classes.explore}>
          Explore
        </a>
        <a href="https://www.google.com" className={classes.user}>
          <FaUserCircle size={"1.5rem"} color="#000" />
        </a>
        <a href="https://www.google.com" className={classes.wishlist}>
          <TbJewishStarFilled size={"1.5rem"} color="#42944c" />
        </a>
        <a href="https://www.google.com" className={classes.cart}>
          <FaShoppingCart size={"1.5rem"} color="#42944c" />
        </a>
      </nav>
    </>
  );
}
