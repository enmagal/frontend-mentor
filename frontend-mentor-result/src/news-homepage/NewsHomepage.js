import React from "react";
import "./NewsHomepage.css";

import { articlesData, navigationData, newsData } from "./NewsHomepageData";

import { ReactComponent as ReactLogo } from "./assets/images/logo.svg";
import image_web from "./assets/images/image-web-3-desktop.jpg";

function NewsLink(props) {
  return (
    <a className="newsLink" href="#">
      <h3>{props.name}</h3>
      <p>{props.content}</p>
    </a>
  );
}

function NewsHomepage(props) {
  return (
    <div className="newsHomepageContainer">
      <div className="newsHomepageColumn">
        <div className="navigation">
          <ReactLogo />
          <div className="navigation__links">
            {navigationData.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="landing">
          <div className="titleSpace">
            <img className="titleSpace__image" src={image_web} />
            <div className="titleSpace__content">
              <h1>The Bright Future of Web 3.0?</h1>
              <div className="titleSpace__content__text">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className="news">
            <h2>New</h2>
            {newsData.map(({ name, content }) => (
              <NewsLink key={name} name={name} content={content} />
            ))}
          </div>
        </div>
        <div className="articles">
          {articlesData.map(({ name, content }) => (
            <p href="#" key={name}>
              {content.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsHomepage;