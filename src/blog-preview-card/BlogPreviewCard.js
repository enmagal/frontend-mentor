import React from "react";
import "./BlogPreviewCard.css";
import { ReactComponent as ReactIllustration } from "./assets/images/illustration-article.svg";
import avatar from "./assets/images/image-avatar.webp";
import ProjectNav from "../components/ProjectNav";

function Label(props) {
  return (
    <div className="labelContainer">
      <p>{props.content}</p>
    </div>
  );
}

function Author(props) {
  return (
    <div className="authorContainer">
      <img src={avatar} alt="avatar" />
      <p>{props.authorName}</p>
    </div>
  );
}

function BlogPreviewCard(props) {
  return (
    <div className="BlogPreviewSection">
      <ProjectNav projectLink="https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl" />
      <div className="BlogCard">
        <div className="illustrationContainer">
          <ReactIllustration />
        </div>
        <Label content="Learning" />
        <p className="date">Published 21 Dec 2023</p>
        <h1>HTML & CSS foundations</h1>
        <p>
          These languages are the backbone of every <br /> website, defining
          structure, content, and <br /> presentation.
        </p>
        <Author authorName="Greg Hooper" />
      </div>
    </div>
  );
}

export default BlogPreviewCard;
