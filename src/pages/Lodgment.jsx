import { useEffect, useState } from "react";
import Caroussel from "../components/Caroussel";
import StarRating from "../components/StarRating";
import Accordion from "../components/Accordion";
import AccordionSection from "../components/AccordionSection";

import { useParams } from "react-router-dom";

const Lodgment = () => {
  const { currentId } = useParams();

  const id = currentId.substring(1);

  const API_URL = "/logements.json";
  const [currentLodgment, setCurrentLodgment] = useState({
    pictures: [],
    location: "",
    tags: [],
    host: { name: "" },

    equipments: [],
  });

  const getCurrentLodgmentData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    const filteredData = data.find((logement) => logement.id === id);

    return filteredData;
  };

  useEffect(() => {
    getCurrentLodgmentData().then((data) => setCurrentLodgment(data));
  }, []);

  const equipments = currentLodgment.equipments.map((tag, index) => {
    return <li key={index}>{tag}</li>;
  });

  const detailInformationDatas = [
    {
      title: "Description",
      content: `${currentLodgment.description}`,
    },
    {
      title: "Equipements",
      content: equipments,
    },
  ];

  const arrayLocation = currentLodgment.location.split(" - ");
  const city = arrayLocation[1];
  const region = arrayLocation[0];

  const arrayName = currentLodgment.host.name.split(" ");
  const firstName = arrayName[0];
  const lastName = arrayName[1];

  const containerStyles = {
    width: "100%",
    height: "600px",
    margin: "0 auto",
  };

  return (
    <div>
      <div className="containerStyles">
        <Caroussel
          picturesDatas={currentLodgment.pictures}
          alt={currentLodgment.name}
          id={currentLodgment.id}
        />
      </div>
      <div className="presentation">
        <div className="presentation-left">
          <h2 className="presentation-left__title">{currentLodgment.title}</h2>
          <h3 className="presentation-left__location">
            {city} , {region}
          </h3>
          <div className="presentation-left__tags">
            {currentLodgment.tags.map((tag, index) => {
              return <p key={index}>{tag}</p>;
            })}
          </div>
        </div>

        <div className="presentation-right">
          <div className="presentation-right__ownerProfile">
            <div className="presentation-right__ownerProfile__name">
              <h3>{firstName}</h3>
              <h3>{lastName}</h3>
            </div>

            <img src={currentLodgment.host.picture} alt="" />
          </div>
          <StarRating rating={currentLodgment.rating} />
        </div>
      </div>
      <div className="detail-informaton">
        <Accordion sections={detailInformationDatas} />
      </div>
    </div>
  );
};

export default Lodgment;
