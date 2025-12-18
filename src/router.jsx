import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import RootLayout from "./components/layout";
import Admin from "./components/Admin";
import Product from "./components/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);
export default router;
