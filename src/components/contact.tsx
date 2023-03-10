import { email } from "../config.js";

const Contact = () => {
  return (
    <div
      class="component centered"
      style={{ "margin-bottom": "45%" }}
      id="contact"
    >
      <h1 class="section-title" style={{ "margin-bottom": "3%" }}>
        <span class="monogreen">04.</span> Contact
      </h1>
      <p class="centered" style={{ "margin-inline": "20%" }}>
        I am currently searching for new opportunities, and would love to chat.
        Whether you have a question, a project in mind, or just want to send me
        a picture of your cat (please do this,) feel free to drop me a note!
      </p>
      <a href={`mailto:${email}`} aria-label="A link to send Justin an email.">
        <button class="centered" style={{ "margin-top": "4%" }}>
          Say Hello
        </button>
      </a>
    </div>
  );
};

export default Contact;
