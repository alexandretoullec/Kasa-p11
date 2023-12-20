import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import App from "./app/App.jsx";
import APropos from "./apropos/APropos.jsx";
import ErrorPage from "./errorPage/Error-page.jsx";
import Lodgment from "../pages/lodgment/Lodgment.jsx";

const Router = () => {
  const Layout = () => {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/Lodgment/:currentId",
          element: <Lodgment />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/apropos",
          element: <APropos />,
          errorElement: <ErrorPage />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
