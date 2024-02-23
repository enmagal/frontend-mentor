import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home.js";
import FaqAccordion from "./faq-accordion/FaqAccordion";
import NewsletterSignUp from "./newsletter-sign-up/NewsletterSignUp";
import BlogPreviewCard from "./blog-preview-card/BlogPreviewCard";
import AgeCalculator from "./age-calculator/AgeCalculator.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqAccordion" element={<FaqAccordion />} />
          <Route path="/newsletterSignUp" element={<NewsletterSignUp />} />
          <Route path="/blogPreviewCard" element={<BlogPreviewCard />} />
          <Route path="/ageCalculator" element={<AgeCalculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
