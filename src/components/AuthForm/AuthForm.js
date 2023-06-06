import React from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { MdVisibilityOff } from "react-icons/md";

import classes from "./AuthForm.module.css";
import { useImmer } from "use-immer";
import { guestUser } from "../../utils/contants";

export default function AuthForm({ handleFormSubmit, err, setErr }) {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("mode") === "signup";
  const [isVisible, setIsVisible] = useImmer(false);
  const [formData, setFormData] = useImmer({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const location = useLocation();

  const handleChange = (e) => {
    setFormData((draft) => {
      draft[e.target.name] = e.target.value;
    });
    setErr("");
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    if (isSignup) {
      handleFormSubmit(formData);
    } else {
      handleFormSubmit({
        email: formData.email,
        password: formData.password,
      });
    }
  };

  const handleGuestLogin = () => {
    setFormData((draft) => {
      draft.email = guestUser.email;
      draft.password = guestUser.password;
    });
    handleFormSubmit(guestUser);
  };

  const handleModeSwitch = () => {
    setErr("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <main className={classes["main-container"]}>
        <form onSubmit={handleSumbit} className={classes.form}>
          <h2>{isSignup ? "Signup" : "Sign In"}</h2>

          {err && <p className={classes.error}>{err}</p>}

          {isSignup && (
            <div className={classes["input-container"]}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
          )}

          <div className={classes["input-container"]}>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="xyz@abc.com"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>

          <div className={classes["input-container"]}>
            <label htmlFor="pwd">Password:</label>
            <span>
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                id="pwd"
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                required
              />
              {isVisible ? (
                <GrView
                  className={classes["password-visible"]}
                  size={"1rem"}
                  onClick={handleVisibility}
                />
              ) : (
                <MdVisibilityOff
                  className={classes["password-visible"]}
                  size={"1rem"}
                  onClick={handleVisibility}
                />
              )}
            </span>
          </div>

          {isSignup && (
            <div className={classes["input-container"]}>
              <label htmlFor="cnf-pwd">Confirm Password:</label>
              <span>
                <input
                  type={isVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="cnf-pwd"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                />
                {isVisible ? (
                  <GrView
                    className={classes["password-visible"]}
                    size={"1rem"}
                    onClick={handleVisibility}
                  />
                ) : (
                  <MdVisibilityOff
                    className={classes["password-visible"]}
                    size={"1rem"}
                    onClick={handleVisibility}
                  />
                )}
              </span>
            </div>
          )}

          {!isSignup && <button>Login</button>}

          {!isSignup && (
            <button type="button" onClick={handleGuestLogin}>
              Guest Login
            </button>
          )}

          {isSignup && <button>Create Account</button>}

          <p>
            Don't have an account?{" "}
            <Link
              to={`?mode=${isSignup ? "login" : "signup"}`}
              onClick={handleModeSwitch}
              state={{ path: location.state?.path }}
            >
              {isSignup ? "Login" : "Signup"}
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
