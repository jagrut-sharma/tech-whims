import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";

export default function AuthForm() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("mode") === "signup";

  return (
    <>
      <main className={classes["main-container"]}>
        <form action="" className={classes.form}>
          <h2>{isSignup ? "Signup" : "Sign In"}</h2>

          {isSignup && (
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

          {isSignup && (
            <div className={classes["input-container"]}>
              <label htmlFor="cnfm-pwd">Confirm Password:</label>
              <input
                type="text"
                name="cnfrm-pwd"
                id="cnfrm-pwd"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {!isSignup && <button>Login</button>}

          {!isSignup && <button>Guest Login</button>}

          {isSignup && <button>Create Account</button>}

          <p>
            Don't have an account?{" "}
            <Link to={`?mode=${isSignup ? "login" : "signup"}`}>
              {isSignup ? "Login" : "Signup"}
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
