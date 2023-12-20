import { Routes, Route } from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import App from "./app/App.jsx";
import APropos from "./apropos/APropos.jsx";
import ErrorPage from "./errorPage/Error-page.jsx";
import Lodgment from "../pages/lodgment/Lodgment.jsx";

const Router = () => {
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

export default Router;
