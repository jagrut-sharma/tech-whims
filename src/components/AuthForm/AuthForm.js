import React from "react";
import { Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";
import { useImmer } from "use-immer";

export default function AuthForm({ handleFormSubmit, err }) {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("mode") === "signup";

  const [formData, setFormData] = useImmer({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((draft) => {
      draft[e.target.name] = e.target.value;
    });
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
    handleFormSubmit({
      email: "adarshbalika@gmail.com",
      password: "adarshbalika",
    });
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
            <input
              type="text"
              name="password"
              id="pwd"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          {!isSignup && <button>Login</button>}

          {!isSignup && (
            <button type="button" onClick={handleGuestLogin}>
              Guest Login
            </button>
          )}

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
