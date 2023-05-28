import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./context/AuthContext";
import { DataProvider } from "./context/DataContext";
import { FilterProvider } from "./context/FilterContext";

// Call make Server
makeServer();

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AuthProvider>
      <DataProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </DataProvider>
    </AuthProvider>
  </StrictMode>
);
