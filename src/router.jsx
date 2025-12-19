import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import RootLayout from "./components/layout";
import Admin from "./components/Admin";
import Product from "./components/Product";
import { adminLoader, loadProduct } from "./loaders/products";
import ProductBoundary from "./error-boundaries/ProductBoundary";

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
        loader: loadProduct,
        errorElement: <ProductBoundary />,
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
    loader: adminLoader,
    errorElement: <ProductBoundary />,
  },
]);
export default router;
