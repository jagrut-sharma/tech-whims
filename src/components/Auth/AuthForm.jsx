import React from "react";
import { Link, useLocation } from "react-router-dom";

import classes from "./AuthForm.module.css";

export default function AuthForm() {
  const location = useLocation();
  const isSignIn = location.pathname === "/login";

  return (
    <>
      <main className={classes["main-container"]}>
        <form action="" className={classes.form}>
          <h2>{isSignIn ? "Sign In" : "Signup"}</h2>

          {!isSignIn && (
            <div className={classes["input-container"]}>
              <label htmlFor="user-email">Name:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="John Doe"
              />
            </div>
          )}

          <div className={classes["input-container"]}>
            <label htmlFor="user-email">Email Address:</label>
            <input
              type="email"
              name="user-email"
              id="user-email"
              placeholder="xyz@abc.com"
            />
          </div>

          <div className={classes["input-container"]}>
            <label htmlFor="pwd">Password:</label>
            <input type="text" name="pwd" id="pwd" placeholder="Password" />
          </div>

          {!isSignIn && (
            <div className={classes["input-container"]}>
              <label htmlFor="cnfm-pwd">Confirm Password:</label>
              <input
                type="text"
                name="cnfm-pwd"
                id="cnfm-pwd"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {isSignIn && <button>Login</button>}

          {isSignIn && <button>Guest Login</button>}

          {!isSignIn && <button>Create Account</button>}

          <p>
            Don't have an account?{" "}
            {isSignIn ? (
              <Link to={"/signup"}>Signup</Link>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </p>
        </form>
      </main>
    </>
  );
}
