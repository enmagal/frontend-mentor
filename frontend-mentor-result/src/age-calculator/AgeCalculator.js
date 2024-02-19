import React, { useState } from "react";
import "./AgeCalculator.css";
import { ReactComponent as ReactArrow } from "./assets/images/icon-arrow.svg";

function AgeCalculator(props) {
  const [year, setYear] = useState(38);
  const [month, setMonth] = useState(3);
  const [day, setDay] = useState(26);
  return (
    <div className="AgeCalculatorSection">
      <div className="AgeCalculatorCard">
        <div className="AgeForm"></div>
        <div className="validation">
          <div className="line" />
          <button className="ArrowButton">
            <ReactArrow />
          </button>
        </div>
        <h1>{year} years</h1>
        <h1>{month} months</h1>
        <h1>{day} days</h1>
      </div>
    </div>
  );
}

export default AgeCalculator;
