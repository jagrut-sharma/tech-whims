import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  token: null,
  handleLogin: () => {},
  handleLogout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    // If not present in local storage gives null => when expanded gives object with cart and wishlist
    setUser((prev) => ({ ...prev, cart: [], wishlist: [] }));
    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, cart: [], wishlist: [] })
      );
    }
  }, []);

  const handleLogin = (token, user) => {
    setToken(token);
    setUser(user);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const authContext = {
    token,
    handleLogin,
    handleLogout,
    user,
  };

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
