import {
  createBrowserRouter,
  Routes,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import App from "./app/App.jsx";
import APropos from "./apropos/APropos.jsx";
import ErrorPage from "./errorPage/Error-page.jsx";
import Lodgment from "../pages/lodgment/Lodgment.jsx";

const Router = () => {
  // const Layout = () => {
  //   return (
  //     <>
  //       <Header />
  //       <Outlet />
  //       <Footer />
  //     </>
  //   );

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Lodgment/:currentId" element={<Lodgment />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/",
//           element: <App />,
//           errorElement: <ErrorPage />,
//         },
//         {
//           path: "/Lodgment/:currentId",
//           element: <Lodgment />,
//           errorElement: <ErrorPage />,
//         },
//         {
//           path: "/apropos",
//           element: <APropos />,
//           errorElement: <ErrorPage />,
//         },
//         {
//           path: "*",
//           element: <ErrorPage />,
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

export default Router;
