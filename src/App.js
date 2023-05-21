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
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
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
