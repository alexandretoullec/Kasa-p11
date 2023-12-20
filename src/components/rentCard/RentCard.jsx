/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./RentCard.scss";

const RentCard = ({ lodgment }) => {
  return (
    <div className="rentCard" key={lodgment.id}>
      <Link className="rentCard__link" to={`/lodgment/:${lodgment.id}`}>
        <img src={lodgment.cover} alt="" />
        <h2>{lodgment.title}</h2>
      </Link>
    </div>
  );
};

export default RentCard;
