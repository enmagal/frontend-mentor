import React from "react";
import "./FaqAccordion.css";
import { ReactComponent as ReactStar } from "./assets/images/icon-star.svg";
import { ReactComponent as ReactPlus } from "./assets/images/icon-plus.svg";
import { ReactComponent as ReactMinus } from "./assets/images/icon-minus.svg";

function Question({ question, text, hide }) {
  if (hide) {
    return (
      <div className="question">
        <div className="questionHeader">
          <h2 className="questionTitle">{question}</h2>
          <ReactPlus />
        </div>
      </div>
    );
  }
  return (
    <div className="question">
      <div className="questionHeader">
        <h2 className="questionTitle">{question}</h2>
        <ReactMinus />
      </div>

      <p className="questionText">{text}</p>
    </div>
  );
}

function FaqAccordion(props) {
  return (
    <div className="faqAccordionSection">
      <div className="faqAccordion">
        <div className="title">
          <ReactStar />
          <h1>FAQs</h1>
        </div>

        <Question
          question="What is Frontend Mentor, and how will it help me?"
          text="Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building."
          hide={false}
        />
        <Question
          question="Is Frontend Mentor free?"
          text="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels."
          hide={true}
        />
        <Question
          question="Can I use Frontend Mentor projects in my portfolio?"
          text="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!"
          hide={true}
        />
        <Question
          question="How can I get help if I'm stuck on a Frontend Mentor challenge?"
          text="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members."
          hide={true}
        />
      </div>
    </div>
  );
}

export default FaqAccordion;
