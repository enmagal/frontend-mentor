import React from "react";

import { ReactComponent as ReactGithub } from "../assets/image/icons8-github-80.svg";
import { ReactComponent as ReactHome } from "../assets/image/icons8-accueil.svg";
import { ReactComponent as ReactLink } from "../assets/image/icons8-lien-externe.svg";
import { Link } from "react-router-dom";

function ProjectNav(props) {
  return (
    <div className="ProjectNav">
      <Link to={"/"}>
        <ReactHome />
      </Link>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/enmagal/frontend-mentor"
      >
        <ReactGithub />
      </a>
      <a target="_blank" rel="noreferrer" href={props.projectLink}>
        <ReactLink />
      </a>
    </div>
  );
}

export default ProjectNav;
