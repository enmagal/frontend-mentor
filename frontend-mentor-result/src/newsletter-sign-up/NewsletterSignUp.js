import "./NewsletterSignUp.css";
import { ReactComponent as ReactList } from "./assets/images/icon-list.svg";
import { ReactComponent as ReactIllustrationDesktop } from "./assets/images/illustration-sign-up-desktop.svg";

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
          <label for="email">Email address</label>
          <input
            className="formText"
            placeholder="email@company.com"
            type="text"
            name="email"
            id="email"
            required
          />
          <input
            className="formSubmit"
            type="submit"
            value="Subscribe to monthly newsletter"
            onClick={props.onClick}
          />
        </div>
        {/* <form action={}>
          <label for="email">Email address</label>
          <input name="email" />
          <button type="submit">Search</button>
        </form> */}
      </div>
      <div className="image">
        <ReactIllustrationDesktop />
      </div>
    </div>
  );
}

function NewsletterSignUp(props) {
  return (
    <div className="newsletterSection">
      <NewsletterForm />
    </div>
  );
}

export default NewsletterSignUp;
