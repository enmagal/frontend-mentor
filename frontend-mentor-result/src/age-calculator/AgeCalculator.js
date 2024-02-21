import React, { useState } from "react";
import "./AgeCalculator.css";
import { ReactComponent as ReactArrow } from "./assets/images/icon-arrow.svg";

function TextInput(props) {
  return (
    <div className="AgeCalculatorformText">
      <label for={props.name}>{props.name}</label>
      <input
        placeholder={props.placeholder}
        type="text"
        name={props.name}
        id={props.name}
        onChange={props.onChange}
      ></input>
    </div>
  );
}

function calculateAge(birthDay, birthMonth, birthYear) {
  const currentDate = new Date();
  const birthDate = new Date(birthMonth + "/" + birthDay + "/" + birthYear);
  const Anniversary = new Date(
    birthMonth + "/" + birthDay + "/" + currentDate.getFullYear()
  );
  const day = 0;
  const month = currentDate.getMonth() + 1;
  var year = 0;
  if (currentDate > Anniversary) {
    year = currentDate.getFullYear() - birthDate.getFullYear();
  } else {
    year = currentDate.getFullYear() - birthDate.getFullYear() - 1;
  }
  return [day, month, year];
}

function AgeCalculator(props) {
  const [year, setYear] = useState("--");
  const [month, setMonth] = useState("--");
  const [day, setDay] = useState("--");
  const [birthDay, setBirthDay] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthYear, setBirthYear] = useState();
  const handleChangeYear = (event) => {
    setBirthYear(event.target.value);
  };
  const handleChangeMonth = (event) => {
    setBirthMonth(event.target.value);
  };
  const handleChangeDay = (event) => {
    setBirthDay(event.target.value);
  };
  const handleClick = () => {
    const [daysNb, monthNb, yearNb] = calculateAge(
      birthDay,
      birthMonth,
      birthYear
    );
    setDay(daysNb);
    setMonth(monthNb);
    setYear(yearNb);
  };
  return (
    <div className="AgeCalculatorSection">
      <div className="AgeCalculatorCard">
        <div className="AgeForm">
          <TextInput name="day" placeholder="DD" onChange={handleChangeDay} />
          <TextInput
            name="month"
            placeholder="MM"
            onChange={handleChangeMonth}
          />
          <TextInput
            name="year"
            placeholder="YYYY"
            onChange={handleChangeYear}
          />
        </div>
        <div className="validation">
          <div className="line" />
          <button className="ArrowButton" onClick={handleClick}>
            <ReactArrow />
          </button>
        </div>
        <div className="AgeCalculatorResult">
          <h1>
            <em>{year}</em> years
          </h1>
          <h1>
            <em>{month}</em> months
          </h1>
          <h1>
            <em>{day}</em> days
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
