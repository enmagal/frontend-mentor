import "./App.css";
import ProjectCards from "./components/ProjectCards";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import NewsletterSignUp from "./newsletter-sign-up/NewsletterSignUp";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div className="App">
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
            className="button"
            href="bento.me/enzomagal"
          >
            See my Bento
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="button"
            href="bento.me/enzomagal"
          >
            The projects
          </a>
        </div>
      </header>
      <div className="projects">
        <h2>Projects</h2>
        <div className="projectRow">
          <ProjectCards title="FAQ accordion" />
          <ProjectCards title="Newsletter sign-up form with success message" />
          <ProjectCards title="FAQ accordion" />
        </div>
        <div className="projectRow">
          <ProjectCards title="FAQ accordion" />
          <ProjectCards title="Newsletter sign-up form with success message" />
          <ProjectCards title="FAQ accordion" />
        </div>
        <div className="projectRow">
          <ProjectCards title="FAQ accordion" />
          <ProjectCards title="Newsletter sign-up form with success message" />
          <ProjectCards title="FAQ accordion" />
        </div>
      </div>
      <FaqAccordion />
      <NewsletterSignUp />
    </div>
  );
}

export default App;
