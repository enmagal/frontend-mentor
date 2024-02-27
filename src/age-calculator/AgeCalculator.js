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

function calculerEcartEntreDates(birthDate) {
  const currentDay = new Date();

  // Convertir les dates en objets Date si elles ne le sont pas déjà
  if (!(birthDate instanceof Date) || !(currentDay instanceof Date)) {
    return "Les entrées ne sont pas valides. Assurez-vous d'entrer des objets Date.";
  }

  // Calculer la différence entre les années
  var differenceAnnees = currentDay.getFullYear() - birthDate.getFullYear();

  // Calculer la différence entre les mois
  var differenceMois = currentDay.getMonth() - birthDate.getMonth();

  // Calculer la différence entre les jours
  var differenceJours = currentDay.getDate() - birthDate.getDate();

  // Corriger la différence des mois si elle est négative
  if (differenceMois < 0 || (differenceMois === 0 && differenceJours < 0)) {
    differenceAnnees--;
    differenceMois += differenceMois < 0 ? 12 : 0;
  }

  // Corriger la différence des jours si elle est négative
  if (differenceJours < 0) {
    var dernierJourMoisPrecedent = new Date(
      currentDay.getFullYear(),
      currentDay.getMonth(),
      0
    ).getDate();
    differenceJours += dernierJourMoisPrecedent;
    differenceMois--;
  }

  // Retourner l'écart en années, mois et jours
  return {
    annees: differenceAnnees,
    mois: differenceMois,
    jours: differenceJours,
  };
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
  const birthDate = new Date(birthMonth + "/" + birthDay + "/" + birthYear);
  const handleClick = () => {
    const ecart = calculerEcartEntreDates(birthDate);
    setDay(ecart.jours);
    setMonth(ecart.mois);
    setYear(ecart.annees);
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
