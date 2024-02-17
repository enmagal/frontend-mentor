import React, { useState } from "react";
import "./FaqAccordion.css";
import { ReactComponent as ReactStar } from "./assets/images/icon-star.svg";
import { ReactComponent as ReactPlus } from "./assets/images/icon-plus.svg";
import { ReactComponent as ReactMinus } from "./assets/images/icon-minus.svg";

const data = [
  {
    name: "1",
    content: {
      question: "What is Frontend Mentor, and how will it help me?",
      text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
  },
  {
    name: "2",
    content: {
      question: "Is Frontend Mentor free?",
      text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
  },
  {
    name: "3",
    content: {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      text: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
  },
  {
    name: "4",
    content: {
      question: "How can I get help if I'm stuck on a challenge?",
      text: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  },
];

function Question({ name, content, toggle, open }) {
  if (!open) {
    return (
      <div className="question">
        <div onClick={() => toggle(name)} className="questionHeader">
          <p className="questionTitle">{content.question}</p>
          <ReactPlus />
        </div>
      </div>
    );
  }
  return (
    <div className="question">
      <div onClick={() => toggle(name)} className="questionHeader">
        <p className="questionTitle">{content.question}</p>
        <ReactMinus />
      </div>
      <p className="questionText">{content.text}</p>
    </div>
  );
}

function FaqAccordion(props) {
  const [openKey, setOpenKey] = useState();

  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <div className="faqAccordionSection">
      <div className="faqAccordion">
        <div className="title">
          <ReactStar />
          <h1 className="faqTitle">FAQs</h1>
        </div>

        {data &&
          data.map(({ name, content }) => (
            <Question
              key={name}
              name={name}
              content={content}
              toggle={handleToggle}
              open={openKey === name}
            />
          ))}
      </div>
      <div className="greyBackground"></div>
    </div>
  );
}

export default FaqAccordion;
