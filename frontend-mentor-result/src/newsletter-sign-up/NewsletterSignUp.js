import { useState } from "react";
import "./NewsletterSignUp.css";
import { ReactComponent as ReactList } from "./assets/images/icon-list.svg";
import { ReactComponent as ReactIllustrationDesktop } from "./assets/images/illustration-sign-up-desktop.svg";
import { ReactComponent as ReactSuccess } from "./assets/images/icon-success.svg";

const data = [
  {
    name: "1",
    content: "Product discovery and building what matters",
  },
  {
    name: "2",
    content: "Measuring to ensure updates are a success",
  },
  {
    name: "3",
    content: "And much more!",
  },
];

function Advantages(props) {
  return (
    <div className="advantages">
      <ReactList />
      <p>{props.content}</p>
    </div>
  );
}

function TextForm(props) {
  if (props.error) {
    return (
      <div className="formTextContainer">
        <div className="formLabels">
          <label for="email">Email address</label>
          <label className="error" for="email">
            Valid email required
          </label>
        </div>

        <input
          className="formTextError"
          placeholder="email@company.com"
          type="text"
          name="email"
          id="email"
          onChange={props.onChange}
          required
        />
      </div>
    );
  }
  return (
    <div className="formTextContainer">
      <div className="formLabels">
        <label for="email">Email address</label>
      </div>
      <input
        className="formText"
        placeholder="email@company.com"
        type="text"
        name="email"
        id="email"
        onChange={props.onChange}
        required
      />
    </div>
  );
}

function NewsletterForm(props) {
  return (
    <div className="newsletterCard">
      <div className="content">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        {data &&
          data.map(({ name, content }) => (
            <Advantages key={name} name={name} content={content} />
          ))}
        <div className="form">
          <TextForm error={props.error} onChange={props.onChange} />
          <input
            className="formSubmit"
            type="submit"
            value="Subscribe to monthly newsletter"
            onClick={props.onClick}
          />
        </div>
      </div>
      <div className="image">
        <ReactIllustrationDesktop />
      </div>
    </div>
  );
}

function Success(props) {
  return (
    <div className="successCard">
      <ReactSuccess />
      <h1>
        Thanks for <br /> subscribing!
      </h1>
      <p>
        A confirmation email has been sent to <br /> <em>{props.email}</em>.
        Please open it and click <br /> the button inside to confirm your
        subscription.
      </p>
      <input
        className="formSubmit"
        type="submit"
        value="Dismiss message"
        onClick={props.onClick}
      />
    </div>
  );
}

function ValidateEmail(email) {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function NewsletterSignUp(props) {
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState("enzo.magal@gmail.com");
  const [error, setError] = useState(false);
  const handleClick = () => {
    if (ValidateEmail(email)) {
      setSubmit(!submit);
      setError(false);
    } else {
      setError(true);
    }
  };
  const handleChange = (event) => {
    setEmail(event.target.value);
    setError(false);
  };
  if (!submit) {
    return (
      <div className="newsletterSection">
        <NewsletterForm
          onClick={handleClick}
          onChange={handleChange}
          error={error}
        />
      </div>
    );
  }
  return (
    <div className="newsletterSection">
      <Success onClick={handleClick} email={email} />
    </div>
  );
}

export default NewsletterSignUp;
