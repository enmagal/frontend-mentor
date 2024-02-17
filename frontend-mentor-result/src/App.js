import "./App.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import NewsletterSignUp from "./newsletter-sign-up/NewsletterSignUp";

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fronted Mentor Result</h1>
        <p>
          Cette page a pour objectif de regrouper mes résultats de challenge
          frontend mentor
        </p>
        <MyButton />
      </header>
      <FaqAccordion />
      <NewsletterSignUp />
    </div>
  );
}

export default App;
