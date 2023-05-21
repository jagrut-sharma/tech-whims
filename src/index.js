import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);
