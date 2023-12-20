import React from "react";
import RentCard from "../rentCard/RentCard";
import "./Container.scss";

const Container = ({ lodgments }) => {
  return (
    <div className="mainContainer">
      {lodgments.map((lodgment) => {
        return <RentCard lodgment={lodgment} key={lodgment.id} />;
      })}
    </div>
  );
};

export default Container;
