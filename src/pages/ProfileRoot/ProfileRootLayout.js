import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import classes from "./ProfileRoot.module.css";

export default function ProfileRootLayout() {
  return (
    <>
      <main className={classes["profile-container"]}>
        <div>
          <NavLink to={"/profile"} className={classes["navlinks-profile"]}>
            User Info
          </NavLink>
          <NavLink
            to={"/profile/address"}
            className={classes["navlinks-profile"]}
          >
            Addresses
          </NavLink>
        </div>
        <Outlet />
      </main>
    </>
  );
}
