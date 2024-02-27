import React from "react";
import { ReactComponent as ReactGithub } from "../assets/image/icons8-github.svg";
import { ReactComponent as ReactTwitter } from "../assets/image/icons8-twitterx.svg";
import { ReactComponent as ReactLinkedin } from "../assets/image/icons8-linkedin-2.svg";

function SocialLinks(props) {
  return (
    <div className="socialLinks">
      <a target="_blank" rel="noreferrer" href="https://github.com/enmagal">
        <ReactGithub />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/SoyPunk">
        <ReactTwitter />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/enzo-magal/"
      >
        <ReactLinkedin />
      </a>
    </div>
  );
}

export default SocialLinks;
