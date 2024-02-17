import "./App.css";
import ProjectCards from "./components/ProjectCards";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import NewsletterSignUp from "./newsletter-sign-up/NewsletterSignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">
          Here are my amazing <br /> Frontend Mentor Results{" "}
        </h1>
        <div className="buttons">
          <a className="button" href="bento.me/enzomagal">
            See my Bento
          </a>
          <a className="button" href="bento.me/enzomagal">
            The projects
          </a>
        </div>
      </header>
      <div className="projects">
        <h2>Projects</h2>
        <ProjectCards />
      </div>
      <FaqAccordion />
      <NewsletterSignUp />
    </div>
  );
}

export default App;
