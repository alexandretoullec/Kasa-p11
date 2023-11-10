import React from "react";
import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import App from "./App.jsx";
import APropos from "./APropos.jsx";
import ErrorPage from "./Error-page.jsx";
import Lodgment from "./Lodgment.jsx";

const Router = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <App />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "apropos",
  //     element: <APropos />,
  //     errorElement: <ErrorPage />,
  //   },
  //   {
  //     path: "lodgment/:id",
  //     element: <Lodgment />,
  //     errorElement: <ErrorPage />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/Lodgment/:currentId" element={<Lodgment />} />
        <Route path=":*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // <RouterProvider router={router} />
  );
};

export default Router;
