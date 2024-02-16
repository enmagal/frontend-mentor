import logo from "./logo.svg";
import "./App.css";
import FaqAccordion from "./faq-accordion/FaqAccordion";

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
    </div>
  );
}

export default App;
