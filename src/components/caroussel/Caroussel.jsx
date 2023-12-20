/* eslint-disable react/prop-types */
import { useState } from "react";

const Caroussel = ({ picturesDatas }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slidersStyle = {
    height: "100%",
    position: "relative",
    margin: "0 2rem",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${picturesDatas[currentIndex]})`,
  };

  const leftArrowContainer = {
    cursor: "pointer",
    position: "absolute",
    height: "100%",
    display: "flex",
    alignItems: "center",
    zIndex: "1000",
  };

  const leftArrowStyle = {
    position: "relative",
    width: "auto",
    height: "4rem",
    cursor: "pointer",
  };
  const rightArrowContainer = {
    top: "0",
    right: "0",
    cursor: "pointer",
    position: "absolute",
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const rightArrowStyle = {
    position: "relative",
    width: "auto",
    height: "4rem",
    cursor: "pointer",
    zIndex: "1001",
  };

  const dotContainerStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    bottom: "4rem",
    color: "white",
  };

  const goToPreviuous = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? picturesDatas.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === picturesDatas.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={slidersStyle}>
      {picturesDatas.length === 1 ? (
        ""
      ) : (
        <div style={leftArrowContainer} onClick={goToPreviuous}>
          <img style={leftArrowStyle} src="/arrow_back.png" alt="arrow_back" />
        </div>
      )}

      <div style={slideStyles}></div>
      {picturesDatas.length === 1 ? (
        ""
      ) : (
        <div style={rightArrowContainer} onClick={goToNext}>
          <img
            style={rightArrowStyle}
            src="/arrow_forward.png"
            alt="arrow_forward"
          />
        </div>
      )}

      <div style={dotContainerStyle}>
        {picturesDatas.length === 1 ? (
          ""
        ) : (
          <p>
            {currentIndex + 1} / {picturesDatas.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default Caroussel;
