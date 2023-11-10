import { useState } from "react";

const Caroussel = ({ picturesDatas, alt, id }) => {
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

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={slidersStyle}>
      <div style={leftArrowContainer} onClick={goToPreviuous}>
        <img style={leftArrowStyle} src="/arrow_back.png" alt="kasa_logo" />
      </div>

      <div style={slideStyles}></div>

      <div style={rightArrowContainer} onClick={goToNext}>
        <img style={rightArrowStyle} src="/arrow_forward.png" alt="kasa_logo" />
      </div>

      <div style={dotContainerStyle}>
        {/* {picturesDatas.map((picture, index) => {
          return (
            <div style={dotStyle} key={index} onClick={() => goToSlide(index)}>
              ●
            </div>
          );
        })} */}
        <p>
          {currentIndex + 1} / {picturesDatas.length}
        </p>
      </div>
    </div>
  );
};

export default Caroussel;
