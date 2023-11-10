// import { useState } from "react";

import MainTitle from "../components/MainTitle";
import Container from "../components/Container";

import "../style/main.css";
import { useEffect, useState } from "react";

const API_URL = "/logements.json";

const App = () => {
  const [lodgments, setLodgments] = useState([]);

  const accomodations = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);
    setLodgments(data);
  };

  useEffect(() => {
    accomodations();
  }, []);

  return (
    <div className="generalContainer">
      <MainTitle />
      <Container lodgments={lodgments} />
    </div>
  );
};

export default App;
