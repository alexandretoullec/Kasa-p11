import React from "react";
import RentCard from "./RentCard";

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
