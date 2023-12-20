import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./Error-pages.scss";

export default function ErrorPage() {
  // const error = useRouteError();
  // console.error(error);

  return (
    <div id="error-page" className="errorPage">
      {/* <Header /> */}
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
}
