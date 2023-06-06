import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import ErrorPage from "./pages/Error Page/ErrorPage";
import Home from "./pages/HomePage/Home";
import Products from "./pages/ProductPage/Products";
import Authentication from "./pages/Authentication/Authentication";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import MockAPI from "./pages/Mockman/Mockman";
import RequireAuth from "./components/RequireAuth";
import UserProfile from "./pages/UserProfile/UserProfile";
import ProductDetail from "./pages/ProductDetails/ProductDetail";
import ProductRootLayout from "./pages/ProductRoot/ProductRootLayout";
import Addresses from "./components/Addresses/Addresses";
import ProfileRootLayout from "./pages/ProfileRoot/ProfileRootLayout";
import Checkout from "./pages/Checkout/Checkout";

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
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productID",
            element: <ProductDetail />,
          },
        ],
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
        path: "profile",
        element: (
          <RequireAuth>
            <ProfileRootLayout />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <UserProfile />,
          },
          {
            path: "address",
            element: <Addresses />,
          },
        ],
      },
      {
        path: "checkout",
        element: (
          <RequireAuth>
            <Checkout />
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
