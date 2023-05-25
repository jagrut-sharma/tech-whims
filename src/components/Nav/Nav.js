import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsBagHeart } from "react-icons/bs";

import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={classes.nav}>
        <h1 className={classes.title}>
          <Link to={"/"} className={classes.link}>
            Tech Whims
          </Link>{" "}
        </h1>
        <h1 className={`${classes.title} ${classes["short-form"]}`}>
          {" "}
          <Link to={"/"} className={classes.link}>
            TW
          </Link>
        </h1>

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
        <Link to={"/products"} className={classes.explore}>
          Explore
        </Link>
        <Link to={"/auth"} className={classes.user}>
          <FaUserCircle size={"1.5rem"} color="#000" />
        </Link>
        <Link to={"/wishlist"} className={classes.wishlist}>
          <BsBagHeart size={"1.5rem"} color="#42944c" />
        </Link>
        <Link to={"/cart"} className={classes.cart}>
          <FaShoppingCart size={"1.5rem"} color="#42944c" />
        </Link>
      </nav>
    </>
  );
}
