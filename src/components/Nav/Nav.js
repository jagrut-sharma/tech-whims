import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
// import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsBagHeart } from "react-icons/bs";

import classes from "./Nav.module.css";
import { useFilter } from "../../context/FilterContext";
import { ACTIONS } from "../../utils/actions";
import { useDataContext } from "../../context/DataContext";

export default function Nav() {
  const { appliedFilterValue, filterDispatch } = useFilter();
  const [searchText, setSearchText] = useState("");

  const {
    dataState: { wishlist, cartList },
  } = useDataContext();

  useEffect(() => {
    const id = setTimeout(() => {
      filterDispatch({ type: ACTIONS.FILTER_SEARCH, payload: searchText });
    }, 500);

    // runs below clearing function(function returned) before running anonymous arrow function
    return () => clearTimeout(id);
  }, [searchText]);

  useEffect(() => {
    setSearchText(appliedFilterValue.search);
  }, [appliedFilterValue]);

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
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
            value={searchText}
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
            {wishlist.length > 0 && (
              <span className={classes["number-label"]}>{wishlist.length}</span>
            )}
          </Link>

          <Link to={"/cart"} className={classes.cart}>
            <FaShoppingCart size={"1.5rem"} color="#42944c" />
            {cartList.length > 0 && (
              <span className={classes["number-label"]}>{cartList.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}
