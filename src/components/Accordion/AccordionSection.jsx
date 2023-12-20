/* eslint-disable react/prop-types */
import { useState } from "react";

const accordionComponent = {
  marginBottom: "2rem",
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

const accordionTitleStyles = {
  borderRadius: "5px",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  padding: "1rem",
  background: " #FF6060",
  color: "white",
  height: "3.5rem",
  fontSize: "1.2rem",
};

const accordionContentStyles = {
  borderRadius: "5px",
  padding: "2rem 1rem ",
  color: "white",
  background: "#fa8484",
};

const AccordionSection = ({
  section,
  isACtiveSection,
  setActiveIndex,

  sectionIndex,
}) => {
  const toggleSection = () => {
    const nextIndex = isACtiveSection ? null : sectionIndex;
    setActiveIndex(nextIndex);
  };

  return (
    <div style={accordionComponent}>
      <div style={accordionTitleStyles} onClick={toggleSection}>
        <div>{section.title}</div>
        <div>{isACtiveSection ? "⮟" : "⮝"}</div>
      </div>
      {isACtiveSection && (
        <div style={accordionContentStyles}>{section.content}</div>
      )}
    </div>
  );
};

export default AccordionSection;
