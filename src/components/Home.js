import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import SocialLinks from "./SocialLinks";
import ProjectCards from "./ProjectCards";

import { dataProjects } from "../dataProjects.js";

function Home(props) {
  const projectsRef = useRef(null);
  function handleScrollToProjects() {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }
  return (
    <div>
      <div className="linksBar">
        <SocialLinks />
      </div>
      <header className="App-header">
        <h1 className="appTitle">
          Here are my <em>Amazing</em> <br /> Frontend Mentor Results
        </h1>
        <div className="buttons">
          <a
            target="_blank"
            rel="noreferrer"
            className="landingButton"
            href="https://bento.me/enzomagal"
          >
            See my Bento
          </a>
          <button className="landingButton" onClick={handleScrollToProjects}>
            The projects
          </button>
        </div>
      </header>
      <div className="projects">
        <h2 id="Projects" ref={projectsRef}>
          Projects
        </h2>
        <div className="projectRow">
          {dataProjects &&
            dataProjects.map(({ name, content }) => (
              <Link to={content.path}>
                <ProjectCards key={name} title={name} content={content} />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
