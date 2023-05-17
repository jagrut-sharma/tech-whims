import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
