import MainTitle from "../../components/mainTitle/MainTitle";
import Container from "../../components/container/Container";

import "./App.scss";
import { useEffect, useState } from "react";

const API_URL = "/logements.json";

const App = () => {
  const [lodgments, setLodgments] = useState([]);

  const accomodations = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLodgments(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
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
