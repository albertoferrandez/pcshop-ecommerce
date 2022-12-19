import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import ComponentesPc from '../pages/ComponentesPc'
import Layout from "../layout/Layout";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "componentes/:compID",
        element: <ComponentesPc />,
      },
      {
        path: "componentes/:compID/:id",
        element: <ProductDetails />,
      }
    ]
  },
]);

