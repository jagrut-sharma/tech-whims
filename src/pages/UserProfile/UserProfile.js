import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import classes from "./UserProfile.module.css";

export default function UserProfile() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  const fullName = user.name ?? `${user.firstName} ${user.lastName}`;

  const logout = () => {
    handleLogout();
    navigate("/");
  };

  return (
    <section className={classes["info"]}>
      <h3>
        Welcome, <span className={classes["full-name"]}>{fullName}</span>
      </h3>
      <p>
        <span className={classes["profile-label"]}>Name: </span> {fullName}
      </p>
      <p>
        <span className={classes["profile-label"]}>Email: </span> {user.email}
      </p>
      <button onClick={logout}>Logout</button>
    </section>
  );
}
