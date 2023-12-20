/* eslint-disable react/prop-types */
import { useState } from "react";
import AccordionSection from "./AccordionSection";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <>
      {sections.map((section, index) => (
        <AccordionSection
          key={index}
          section={section}
          isACtiveSection={index === activeIndex}
          setActiveIndex={setActiveIndex}
          sectionIndex={index}
        />
      ))}
    </>
  );
};

export default Accordion;
