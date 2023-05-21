import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = () => {};

  const logout = () => {};

  const authContext = {
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
