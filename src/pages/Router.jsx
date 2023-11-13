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
  const router = createBrowserRouter([
    {
      path: "/",
      // eslint-disable-next-line react/jsx-key
      element: [<Header key={0} />, <App key={1} />, <Footer key={2} />],
      errorElement: [
        <Header key={0} />,
        <ErrorPage key={1} />,
        <Footer key={2} />,
      ],
    },
    {
      path: "/apropos",
      // eslint-disable-next-line react/jsx-key
      element: [<Header key={0} />, <APropos key={1} />, <Footer key={2} />],
      errorElement: [
        <Header key={0} />,
        <ErrorPage key={1} />,
        <Footer key={2} />,
      ],
    },
    {
      path: "Lodgment/:currentId",
      // eslint-disable-next-line react/jsx-key
      element: [<Header key={0} />, <Lodgment key={1} />, <Footer key={2} />],
      errorElement: [
        <Header key={0} />,
        <ErrorPage key={1} />,
        <Footer key={2} />,
      ],
    },
  ]);

  return (
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<App />} />
    //     <Route path="/apropos" element={<APropos />} />
    //     <Route path="/Lodgment/:currentId" element={<Lodgment />} />
    //     <Route path="*" element={<ErrorPage />} />
    //   </Routes>
    //   <Footer />
    // </BrowserRouter>

    <RouterProvider router={router} />
  );
};

export default Router;
