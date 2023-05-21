import React, { useState } from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import axios from "axios";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import UserProfile from "./UserProfile";

export default function Authentication() {
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const baseURL = `/api/auth/${mode}`;
  const { token, handleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleFormSubmit = async (formValue) => {
    try {
      // console.log(formValue);
      const res = await axios.post(baseURL, formValue);
      const {
        data: { encodedToken },
      } = res;

      handleLogin(encodedToken);
      navigate(redirectPath, { replace: true });
    } catch (err) {
      // console.log("In catch");
      // console.log(err);
      if (err.response.status === 422) {
        setError("User already exists. Please login");
      } else {
        setError("No user Found, please signup");
      }
    }
  };

  return (
    <>
      {token ? (
        <UserProfile />
      ) : (
        <AuthForm handleFormSubmit={handleFormSubmit} err={error} />
      )}
    </>
  );
}
