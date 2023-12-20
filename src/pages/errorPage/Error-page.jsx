import { Link } from "react-router-dom";

import "./Error-pages.scss";

export default function ErrorPage() {
  return (
    <div id="error-page" className="errorPage">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>

      <p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
}
