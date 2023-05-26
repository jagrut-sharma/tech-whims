import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Authentication from "./pages/Authentication";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import MockAPI from "./pages/Mockman/Mockman";
import RequireAuth from "./components/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "auth",
        element: <Authentication />,
      },
      {
        path: "wishlist",
        element: (
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        ),
      },
      {
        path: "cart",
        element: (
          <RequireAuth>
            <Cart />
          </RequireAuth>
        ),
      },
      {
        path: "mockman",
        element: <MockAPI />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// review k
// add to cart bold
// try-catch password !== confirm password -toast
// Money in indian format
// tell harsh about navigate.
