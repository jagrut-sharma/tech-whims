import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [name, setName] = useState(null);

  const handleLogin = (token, name) => {
    setToken(token);
    console.log(name);
    setName(name);
    localStorage.setItem("token", token);
  };

  const handleLogout = () => {
    setToken(null);
    setName(null);
    localStorage.removeItem("token");
  };

  const authContext = {
    token,
    handleLogin,
    handleLogout,
    name,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
