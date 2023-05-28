import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsBagHeart } from "react-icons/bs";

import classes from "./Nav.module.css";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";

export default function Nav() {
  const {
    appliedFilterValue: { search },
    filterDispatch,
  } = useFilter();

  const handleInputChange = (e) => {
    filterDispatch({ type: ACTIONS.FILTER_SEARCH, payload: e.target.value });
  };

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

        <div className={classes["search-bar"]}>
          <input
            type="search"
            name="search-bar"
            id="search-bar-input"
            placeholder="Search Products"
            value={search}
            onChange={handleInputChange}
          />
        </div>

        {/* <form action="#" className={classes["search-bar"]}>
          <button className={classes["search-btn"]}>
            <FiSearch size="1.5rem" />
          </button>

          <input
            type="search"
            name="search-bar"
            id="search-bar-input"
            placeholder="Search Products"
          />
        </form> */}

        <Link to={"/products"} className={classes.explore}>
          Explore
        </Link>

        <div className={classes["icon-links"]}>
          <Link to={"/auth"} className={classes.user}>
            <FaUserCircle size={"1.5rem"} color="#000" />
          </Link>

          <Link to={"/wishlist"} className={classes.wishlist}>
            <BsBagHeart size={"1.5rem"} color="#42944c" />
          </Link>

          <Link to={"/cart"} className={classes.cart}>
            <FaShoppingCart size={"1.5rem"} color="#42944c" />
          </Link>
        </div>
      </nav>
    </>
  );
}
