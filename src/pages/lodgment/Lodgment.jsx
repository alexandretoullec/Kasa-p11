import { useEffect, useState } from "react";
import Caroussel from "../../components/caroussel/Caroussel";
import StarRating from "../../components/starRating/StarRating";
import Accordion from "../../components/Accordion/Accordion";
import ErrorPage from "../errorPage/Error-page";
import "./lodgment.scss";

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
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const filteredData = data.find((logement) => logement.id === id);
      setCurrentLodgment(filteredData || {});
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getCurrentLodgmentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (!currentLodgment || !currentLodgment.pictures || !currentLodgment.tags) {
    return <ErrorPage />;
  } else {
    // Destructure properties for cleaner code
    const {
      pictures,
      location,
      tags,
      title,
      host,
      rating,
      description,
      equipments,
    } = currentLodgment;

    const equipmentsList = equipments.map((tag, index) => (
      <li key={index}>{tag}</li>
    ));

    const detailInformationDatas = [
      {
        title: "Description",
        content: description,
      },
      {
        title: "Equipements",
        content: <ul>{equipmentsList}</ul>,
      },
    ];

    const arrayLocation = location.split(" - ");
    const city = arrayLocation[1];
    const region = arrayLocation[0];

    const arrayName = host.name.split(" ");
    const firstName = arrayName[0];
    const lastName = arrayName[1];

    return (
      <div>
        <div className="containerStyles">
          <Caroussel picturesDatas={pictures} />
        </div>
        <div className="presentation">
          <div className="presentation-left">
            <h2 className="presentation-left__title">{title}</h2>
            <h3 className="presentation-left__location">
              {city} , {region}
            </h3>
            <div className="presentation-left__tags">
              {tags && tags.map((tag, index) => <p key={index}>{tag}</p>)}
            </div>
          </div>

          <div className="presentation-right">
            <div className="presentation-right__ownerProfile">
              <div className="presentation-right__ownerProfile__name">
                <h3>{firstName}</h3>
                <h3>{lastName}</h3>
              </div>
              <img src={host.picture} alt="" />
            </div>
            <StarRating rating={rating} />
          </div>
        </div>
        <div className="detail-informaton">
          <Accordion sections={detailInformationDatas} />
        </div>
      </div>
    );
  }
};

export default Lodgment;
