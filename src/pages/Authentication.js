import React, { useState } from "react";
import AuthForm from "../components/Auth/AuthForm";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Authentication() {
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const baseURL = `/api/auth/${mode}`;
  const { handleLogin } = useAuth();

  const handleFormSubmit = async (formValue) => {
    try {
      // console.log(formValue);
      const res = await axios.post(baseURL, formValue);
      const {
        data: { encodedToken },
      } = res;

      handleLogin(encodedToken);
    } catch (err) {
      console.log("In catch");
      setError("No user Found, please signup");
    }
  };

  return (
    <>
      <AuthForm handleFormSubmit={handleFormSubmit} err={error} />
    </>
  );
}
