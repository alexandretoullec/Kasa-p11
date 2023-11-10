import React from "react";
import Accordion from "../components/Accordion";

const aproposDatas = [
  {
    title: "Fiabilité",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum maiores eaque ad iusto itaque ipsa sapiente. Fugit, consectetur explicabo! Dolores a tenetur quibusdam commodi quod natus voluptate, suscipit vitae sed excepturi odit numquam sunt corrupti accusamus perspiciatis? Vero aspernatur, beatae officia consequatur earum molestias maiores quisquam corporis nesciunt modi.",
  },
  {
    title: "Respect",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum maiores eaque ad iusto itaque ipsa sapiente. Fugit, consectetur explicabo! Dolores a tenetur quibusdam commodi quod natus voluptate, suscipit vitae sed excepturi odit numquam sunt corrupti accusamus perspiciatis? Vero aspernatur, beatae officia consequatur earum molestias maiores quisquam corporis nesciunt modi.",
  },
  {
    title: "Service",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum maiores eaque ad iusto itaque ipsa sapiente. Fugit, consectetur explicabo! Dolores a tenetur quibusdam commodi quod natus voluptate, suscipit vitae sed excepturi odit numquam sunt corrupti accusamus perspiciatis? Vero aspernatur, beatae officia consequatur earum molestias maiores quisquam corporis nesciunt modi.",
  },
  {
    title: "Sécurité",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum maiores eaque ad iusto itaque ipsa sapiente. Fugit, consectetur explicabo! Dolores a tenetur quibusdam commodi quod natus voluptate, suscipit vitae sed excepturi odit numquam sunt corrupti accusamus perspiciatis? Vero aspernatur, beatae officia consequatur earum molestias maiores quisquam corporis nesciunt modi.",
  },
];

const APropos = () => {
  return (
    <div>
      <div className="aProposBanner"></div>
      <div className="accordionSection">
        <Accordion sections={aproposDatas} />
      </div>
    </div>
  );
};

export default APropos;
