import React from "react";
import arrow from "../assets/image/icons8-double-droite-90.png";

function ProjectCards(props) {
  return (
    <div className="projectCard">
      <img className="arrow" src={arrow} alt="arrow" />
      <h1>{props.title}</h1>
      <p className="date">Release : 18-02-2024</p>
    </div>
  );
}

export default ProjectCards;
