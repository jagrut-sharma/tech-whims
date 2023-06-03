import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import classes from "./ProfileRoot.module.css";

export default function ProfileRootLayout() {
  const getClass = ({ isActive }) => {
    return isActive
      ? `${classes["navlinks-profile"]} ${classes["active-profile"]}`
      : classes["navlinks-profile"];
  };

  return (
    <>
      <main className={classes["profile-container"]}>
        <div className={classes["card-container"]}>
          <div className={classes["navlinks-profile-container"]}>
            <NavLink to={"/profile"} className={getClass} end>
              User Info
            </NavLink>
            <NavLink to={"/profile/address"} className={getClass}>
              Addresses
            </NavLink>
          </div>
          <Outlet />
        </div>
      </main>
    </>
  );
}
